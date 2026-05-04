import { g as getEnquiries, a as putEnquiries } from '../../../chunks/storage_CiLTPqcL.mjs';
import nodemailer from 'nodemailer';
export { renderers } from '../../../renderers.mjs';

const buckets = /* @__PURE__ */ new Map();
const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1e3;
function isRateLimited(ip) {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > MAX_REQUESTS) return true;
  return false;
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://empereal.energy", "SSR": true};
function getEnv(key) {
  return Object.assign(__vite_import_meta_env__, { USER: process.env.USER, _: process.env._ })[key] ?? process.env[key] ?? "";
}
async function sendEnquiryEmail(enquiry) {
  const host = getEnv("SMTP_HOST");
  if (!host) return;
  const transporter = nodemailer.createTransport({
    host,
    port: Number(getEnv("SMTP_PORT") || "587"),
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS")
    }
  });
  await transporter.sendMail({
    from: getEnv("SMTP_FROM") || "noreply@empereal.com",
    to: getEnv("SMTP_TO") || "info@empereal.com",
    subject: `New enquiry from ${enquiry.name}`,
    text: [
      `Name: ${enquiry.name}`,
      `Company: ${enquiry.company ?? "—"}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone ?? "—"}`,
      `Interest: ${enquiry.interest ?? "—"}`,
      ``,
      enquiry.message
    ].join("\n")
  });
}

const prerender = false;
const POST = async ({ request }) => {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many submissions. Please try again later." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { name, email, message, company, phone, interest } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const enquiry = {
    id: crypto.randomUUID(),
    name: name.trim(),
    company: company?.trim() || void 0,
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || void 0,
    interest: interest?.trim() || void 0,
    message: message.trim(),
    status: "new",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  try {
    const all = await getEnquiries();
    await putEnquiries([enquiry, ...all]);
  } catch (err) {
    console.error("[enquiry submit] storage error", err);
    return new Response(
      JSON.stringify({ error: "Failed to save enquiry. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  sendEnquiryEmail(enquiry).catch(
    (err) => console.error("[enquiry submit] email error", err)
  );
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
