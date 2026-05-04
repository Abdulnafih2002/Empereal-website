const buckets = new Map<string, { count: number; windowStart: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

export function isRateLimited(ip: string): boolean {
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
