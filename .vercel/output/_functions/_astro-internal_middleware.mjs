import { d as defineMiddleware, s as sequence } from './chunks/index_D2W2ZVRk.mjs';
import { g as getTokenFromRequest, v as verifyToken } from './chunks/auth_BHfGCVaX.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BCPFtYiY.mjs';
import 'piccolore';
import './chunks/astro/server_Bkw53cAP.mjs';
import 'clsx';

const CRM_PUBLIC_PAGES = ["/crm/login"];
const CRM_PUBLIC_API = ["/api/crm/auth/login", "/api/crm/auth/logout"];
const onRequest$1 = defineMiddleware(async (context, next) => {
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
          headers: { "Content-Type": "application/json" }
        });
      }
      return context.redirect("/crm/login");
    }
    context.locals.admin = { authenticated: true };
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
