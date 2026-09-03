import { defineMiddleware } from "astro:middleware";
import { createHmac, timingSafeEqual } from "node:crypto";
import { verifyToken, getTokenFromRequest } from "./lib/auth.js";

const CRM_PUBLIC_PAGES = ["/crm/login"];
const CRM_PUBLIC_API = ["/api/crm/auth/login", "/api/crm/auth/logout"];
const MAINTENANCE_COOKIE = "maintenance_bypass";
const MAINTENANCE_ASSETS = new Set([
  "/images/maintenance-reference.jpeg",
  "/icons/Site%20icon.svg",
  "/site.webmanifest",
]);

function env(key: string): string {
  return process.env[key] ?? (import.meta.env as Record<string, string>)[key] ?? "";
}

function isMaintenanceEnabled(): boolean {
  return env("MAINTENANCE_MODE").trim().toLowerCase() === "true";
}

function getBypassCookieValue(key: string): string {
  return createHmac("sha256", key).update("empereal-maintenance-bypass").digest("hex");
}

function hasMaintenanceBypass(request: Request, key: string): boolean {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${MAINTENANCE_COOKIE}=([^;]+)`));
  if (!match) return false;

  const supplied = Buffer.from(match[1], "utf8");
  const expected = Buffer.from(getBypassCookieValue(key), "utf8");
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

function setMaintenanceBypassCookie(headers: Headers, key: string): void {
  const secure = env("NODE_ENV") === "production" ? "; Secure" : "";
  headers.set(
    "Set-Cookie",
    `${MAINTENANCE_COOKIE}=${getBypassCookieValue(key)}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${secure}`,
  );
}

function applyResponseHeaders(response: Response, pathname: string): Response {
  const isPrivateRoute =
    pathname === "/crm" ||
    pathname.startsWith("/crm/") ||
    pathname === "/api" ||
    pathname.startsWith("/api/");

  if (isPrivateRoute) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  // Prevent Vercel's CDN from caching SSR page responses. Explicit cache
  // headers set by endpoints (for example, the public sitemap) take priority.
  if (!pathname.startsWith("/_") && !response.headers.has("Cache-Control")) {
    response.headers.set("Cache-Control", "no-store");
  }

  return response;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const maintenanceKey = env("MAINTENANCE_BYPASS_KEY").trim().replace(/^\/+|\/+$/g, "");
  const bypassPath = maintenanceKey ? `/${maintenanceKey}` : "";
  const isBypassEntry = bypassPath !== "" && pathname === bypassPath;
  const isMaintenancePage = pathname === "/maintenance" || pathname === "/maintenance/";

  if (!isMaintenanceEnabled() && isMaintenancePage) {
    return new Response(null, {
      status: 307,
      headers: {
        Location: "/",
        "Cache-Control": "no-store",
      },
    });
  }

  if (isMaintenanceEnabled() && !isMaintenancePage && !MAINTENANCE_ASSETS.has(pathname)) {
    if (isBypassEntry) {
      const headers = new Headers({ Location: "/", "Cache-Control": "no-store" });
      setMaintenanceBypassCookie(headers, maintenanceKey);
      return new Response(null, { status: 302, headers });
    }

    if (!hasMaintenanceBypass(context.request, maintenanceKey)) {
      return new Response(null, {
        status: 307,
        headers: {
          Location: "/maintenance",
          "Cache-Control": "no-store",
        },
      });
    }
  }

  const isCrmPage = pathname.startsWith("/crm") && !CRM_PUBLIC_PAGES.includes(pathname);
  const isCrmApi = pathname.startsWith("/api/crm") && !CRM_PUBLIC_API.includes(pathname);

  if (isCrmPage || isCrmApi) {
    const token = getTokenFromRequest(context.request);
    const authenticated = !!token && verifyToken(token);

    if (!authenticated) {
      if (isCrmApi) {
        return applyResponseHeaders(
          new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }),
          pathname,
        );
      }
      return applyResponseHeaders(
        new Response(null, {
          status: 302,
          headers: { Location: "/crm/login" },
        }),
        pathname,
      );
    }

    context.locals.admin = { authenticated: true };
  }

  const response = await next();
  return applyResponseHeaders(response, pathname);
});
