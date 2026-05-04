import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { k as getPasswordHash } from './storage_CiLTPqcL.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://empereal.energy", "SSR": true};
function env(key) {
  return process.env[key] ?? Object.assign(__vite_import_meta_env__, { JWT_SECRET: "7vNj0R1m00t_ybjAsc0Yb5OVJTEXRpJFBvsIYkXAHr-9Fc8o9_OtCns4vvyNBcC3", ADMIN_PASSWORD_HASH: "$2b$10", _: process.env._ })[key] ?? "";
}
function getJwtSecret() {
  const secret = env("JWT_SECRET");
  if (!secret) throw new Error("JWT_SECRET is not set");
  return secret;
}
async function hashPassword(plain) {
  return bcrypt.hash(plain, 10);
}
async function verifyPassword(plain) {
  const blobHash = await getPasswordHash();
  const hash = blobHash ?? env("ADMIN_PASSWORD_HASH");
  if (!hash) return false;
  return bcrypt.compare(plain, hash);
}
function signToken() {
  return jwt.sign({ role: "admin" }, getJwtSecret(), { expiresIn: "8h" });
}
function verifyToken(token) {
  try {
    jwt.verify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
}
function setAuthCookie(headers, token) {
  headers.set(
    "Set-Cookie",
    `crm_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800`
  );
}
function clearAuthCookie(headers) {
  headers.set(
    "Set-Cookie",
    "crm_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0"
  );
}
function getTokenFromRequest(request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(/(?:^|;\s*)crm_session=([^;]+)/);
  return match ? match[1] : null;
}

export { verifyPassword as a, setAuthCookie as b, clearAuthCookie as c, getTokenFromRequest as g, hashPassword as h, signToken as s, verifyToken as v };
