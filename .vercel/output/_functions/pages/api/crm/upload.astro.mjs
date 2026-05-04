import { put } from '@vercel/blob';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
function hasBlob() {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}
const POST = async ({ request }) => {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
  const file = formData.get("image");
  if (!file || file.size === 0) {
    return json({ error: "No image provided" }, 400);
  }
  if (!file.type.startsWith("image/")) {
    return json({ error: "Only image files are allowed" }, 400);
  }
  if (file.size > 4 * 1024 * 1024) {
    return json({ error: "Image must be under 4 MB" }, 400);
  }
  const ext = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const base = file.name.replace(/\.[^.]+$/, "").replace(/[^a-z0-9-_]/gi, "-").slice(0, 40);
  const filename = `${base}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
  if (hasBlob()) {
    const blob = await put(`empereal/images/${filename}`, file, {
      access: "public",
      contentType: file.type
    });
    return json({ url: blob.url }, 200);
  }
  const { writeFile, mkdir } = await import('node:fs/promises');
  const { join } = await import('node:path');
  const dir = join(process.cwd(), "public", "images");
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(join(dir, filename), buffer);
  return json({ url: `/images/${filename}` }, 200);
};
function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
