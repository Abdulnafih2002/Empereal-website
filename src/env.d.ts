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
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_CLARITY_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_FACEBOOK_DOMAIN_VERIFICATION?: string;
  readonly PUBLIC_TWITTER_SITE?: string;
}

declare namespace App {
  interface Locals {
    admin: { authenticated: boolean };
  }
}
