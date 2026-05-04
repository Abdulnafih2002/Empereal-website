import { defineMiddleware } from "astro:middleware";
import { verifyToken, getTokenFromRequest } from "./lib/auth.js";

const CRM_PUBLIC_PAGES = ["/crm/login"];
const CRM_PUBLIC_API = ["/api/crm/auth/login", "/api/crm/auth/logout"];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const isCrmPage = pathname.startsWith("/crm") && !CRM_PUBLIC_PAGES.includes(pathname);
  const isCrmApi = pathname.startsWith("/api/crm") && !CRM_PUBLIC_API.includes(pathname);

  if (isCrmPage || isCrmApi) {
    const token = getTokenFromRequest(context.request);
    const authenticated = !!token && verifyToken(token);

    if (!authenticated) {
      if (isCrmApi) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
      return context.redirect("/crm/login");
    }

    context.locals.admin = { authenticated: true };
  }

  return next();
});
