/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly JWT_SECRET: string;
  readonly ADMIN_PASSWORD_HASH: string;
  readonly BLOB_READ_WRITE_TOKEN: string;
  readonly SMTP_HOST?: string;
  readonly SMTP_PORT?: string;
  readonly SMTP_USER?: string;
  readonly SMTP_PASS?: string;
  readonly SMTP_FROM?: string;
  readonly SMTP_TO?: string;
}

declare namespace App {
  interface Locals {
    admin: { authenticated: boolean };
  }
}
