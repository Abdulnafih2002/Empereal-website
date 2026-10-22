# Empereal-websites

Run locally with `npm install` and `npm run dev`, using `.env.example` as thee
template for `.env`. Build with `npm run build`.

## Hosted enquiries and profile downloads

The contact form POSTs to `/api/enquiries/submit`. Company profile downloads
temporarily validate details in the browser and download the static PDF directly;
they do not save or send the entered details and do not require Blob storage. Deploy with the Astro Vercel adapter configured
in this repository; serving only static build files does not provide this API.

Set `BLOB_READ_WRITE_TOKEN` in the hosting project's environment for Production
and any Preview deployments you use, then redeploy. The current storage code
requires a public Vercel Blob store. Local `.env` values are not deployed.
Without a token, development uses temporary memory; hosted enquiry operations
fail instead of reporting success for data that will disappear.

For email notifications, also configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASS`, `SMTP_FROM`, and `SMTP_TO`. Port 465 uses implicit TLS; port 587
uses SMTP with STARTTLS. Notification failures are logged but do not undo a
saved enquiry.

If either form fails, inspect the `/api/enquiries/submit` response in the browser
Network tab and the corresponding hosting function logs. A storage error is
logged with `[enquiry submit] storage error`; check the token, connected store,
and store access mode. HTML instead of JSON can indicate a maintenance redirect
or missing server function. Check `MAINTENANCE_MODE` and the deployment output.
The PDF should be available at `/empereal-company-profile.pdf`.

## CRM refresh behaviour

The CRM loads enquiries when you open a page or click **Refresh enquiries** on
the dashboard or enquiry list. It does not check automatically in the background.
Leaving a CRM tab open therefore makes no recurring enquiry requests. New leads
and sidebar counts appear on your next refresh or navigation.

Page loads and submissions still use Blob operations. This change reduces usage;
it does not reactivate a store already suspended by Vercel. Deploy the change and
reload any existing CRM tabs to stop their old polling scripts.


hi
