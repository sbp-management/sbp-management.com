import path from "node:path";
import type { NextConfig } from "next";
import { dePaths, paths, type PageKey } from "./src/i18n/config";

/** Pages with an address of their own (anchors and duplicate addresses left out). */
const PAGE_KEYS = (Object.keys(paths) as PageKey[]).filter(
  (key) => !paths[key].includes("#") && !["candidates", "jobBoards"].includes(key),
);

/** Paths that are not German pages: the language folders, Next.js / Netlify internals and static files. */
const NOT_RESERVED =
  "(?!(?:de|en|ru|sr)(?:/|$)|_next/|\\.netlify/|\\.well-known/|images/|favicon\\.ico|icon\\.png|apple-icon\\.png|robots\\.txt|sitemap\\.xml)";

/**
 * Security headers for every response. The Content-Security-Policy only allows this site's own
 * scripts, styles, fonts and images (everything is self-hosted); inline scripts/styles are needed
 * by Next.js. It is left out in development, where React needs eval() for debugging.
 */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  ...(process.env.NODE_ENV === "production"
    ? [
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "font-src 'self'",
            "connect-src 'self'",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "object-src 'none'",
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // German is the main language and lives at the root with German addresses (src/i18n/config.ts):
  // each German address is served by the internal /de route of the same page (rewrite, the address
  // stays German), and the internal /de addresses redirect to the German ones.
  async rewrites() {
    return {
      beforeFiles: [
        ...PAGE_KEYS.map((key) => ({
          source: dePaths[key],
          destination: `/de${paths[key]}`,
        })),
        { source: "/jobs/deutschland/:slug", destination: "/de/jobs/germany/:slug" },
        // Any other address outside the language folders: the German 404 page, address unchanged.
        { source: `/:path(${NOT_RESERVED}.+)`, destination: "/de/:path" },
      ],
    };
  },
  async redirects() {
    return [
      // Old /de addresses → German addresses at the root.
      { source: "/de", destination: "/", permanent: true },
      ...PAGE_KEYS.filter((key) => key !== "home").map((key) => ({
        source: `/de${paths[key]}`,
        destination: dePaths[key],
        permanent: true,
      })),
      { source: "/de/jobs/germany/:slug", destination: "/jobs/deutschland/:slug", permanent: true },
      { source: "/de/:path*", destination: "/:path*", permanent: true },
      // Addresses of the old German site that changed (/ueber-uns, /kontakt, /datenschutz and
      // /impressum are the same as before).
      { source: "/services", destination: "/leistungsfelder", permanent: true },
      { source: "/stellenausschreibungen", destination: "/jobs/deutschland", permanent: true },
      { source: "/stellenausschreibungen/:slug", destination: "/jobs/deutschland/:slug", permanent: true },
    ];
  },
  // A stray package-lock.json in the home folder otherwise gets picked as the workspace root.
  turbopack: { root: path.join(__dirname) },
  // All images live in /public/images (copied from the old Webflow site), so no remote hosts are allowed.
  images: {
    // Browsers that support AVIF get it (smallest); the rest get WebP. Each visitor only downloads
    // the size that fits their screen, generated from the originals on first request.
    formats: ["image/avif", "image/webp"],
    // The files in /public/images don't change under the same name, so generated sizes can be cached for a year.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
