export const prerender = false;
import type { APIRoute } from "astro";
import { getEnquiries } from "../../../../lib/storage.js";

export const GET: APIRoute = async () => {
  const enquiries = await getEnquiries();
  return new Response(JSON.stringify(enquiries), {
    headers: { "Content-Type": "application/json" },
  });
};
