import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getPasswordHash } from "./storage.js";

function env(key: string): string {
  // process.env is populated by --env-file in dev and by Vercel at runtime
  return process.env[key] ?? (import.meta.env as Record<string, string>)[key] ?? "";
}

function getJwtSecret(): string {
  const secret = env("JWT_SECRET");
  if (!secret) throw new Error("JWT_SECRET is not set");
  return secret;
}

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}

export async function verifyPassword(plain: string): Promise<boolean> {
  // Blob hash (set via CRM) takes priority over the env-var initial value
  const blobHash = await getPasswordHash();
  const hash = blobHash ?? env("ADMIN_PASSWORD_HASH");
  if (!hash) return false;
  return bcrypt.compare(plain, hash);
}

export function signToken(): string {
  return jwt.sign({ role: "admin" }, getJwtSecret(), { expiresIn: "8h" });
}

export function verifyToken(token: string): boolean {
  try {
    jwt.verify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
}

export function setAuthCookie(headers: Headers, token: string): void {
  headers.set(
    "Set-Cookie",
    `crm_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800`
  );
}

export function clearAuthCookie(headers: Headers): void {
  headers.set(
    "Set-Cookie",
    "crm_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0"
  );
}

export function getTokenFromRequest(request: Request): string | null {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(/(?:^|;\s*)crm_session=([^;]+)/);
  return match ? match[1] : null;
}
