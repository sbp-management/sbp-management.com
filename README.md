This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

The site is hosted on [Netlify](https://www.netlify.com/), which detects Next.js and builds it with its Next.js Runtime (settings in `netlify.toml`: build command, Node 24, cache headers). German is the main language at the root with German addresses (`/ueber-uns`, `/leistungsfelder/…`); English, Russian and Serbian live under `/en`, `/ru`, `/sr` (address table in `src/i18n/config.ts`). The German addresses, the redirects (old `/de/…` and old-site addresses) and the security headers are defined in `next.config.ts` and applied by Netlify automatically. A local `netlify build --offline` (Netlify CLI 27.11.x, Next.js Runtime 5.16.x) completes without warnings.

### First deploy

1. Netlify → Add new project → Import an existing project → GitHub → `sbp-management/sbp-management.com`.
   - Branch to deploy: the branch with the relaunch (currently `redesign`; or merge it into `main` first).
   - Build settings are read from `netlify.toml` – leave the fields in the dashboard as detected.
2. Site configuration → Environment variables (scope: Builds + Functions):
   - `RESEND_API_KEY` – the Resend key (secret).
   - `CONTACT_FROM` – e.g. `SBP Website <website@sbp-management.com>` (sender on a domain verified in Resend).
3. Deploy, then test on the `*.netlify.app` address before switching the domain: the German pages at the root, `/en`, `/ru`, `/sr`, a job listing (`/jobs/deutschland/…`), and one contact-form message.

### Domain (sbp-management.com)

- Netlify → Domain management → add `www.sbp-management.com` as the **primary** domain and `sbp-management.com` (redirects to www). The canonical URLs, sitemap and share previews use `https://www.sbp-management.com` (`SITE_URL` in `src/i18n/metadata.ts`).
- DNS stays at one.com. Change **only** the website records as Netlify shows them (the `www` CNAME to the Netlify address and the apex `A` record to Netlify's load balancer). Leave the `MX`, `TXT` (SPF/DKIM/DMARC, Google and Resend verification) records untouched, so email keeps working.
- Netlify issues the HTTPS certificate automatically once DNS points to it.

### After going live

- Run Google PageSpeed Insights on the main pages, and check usage on Netlify's usage page.
- The contact form's flood protection is kept in memory, so on Netlify it is per server instance and resets with each deploy (best effort only).

Images are resized and converted to AVIF/WebP on request by Netlify's image CDN (`next/image`).
