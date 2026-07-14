import { defineMiddleware } from "astro:middleware";
import { verifyToken, getTokenFromRequest } from "./lib/auth.js";

const CRM_PUBLIC_PAGES = ["/crm/login"];
const CRM_PUBLIC_API = ["/api/crm/auth/login", "/api/crm/auth/logout"];

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
