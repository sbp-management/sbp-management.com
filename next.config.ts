import path from "node:path";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder otherwise gets picked as the workspace root.
  turbopack: { root: path.join(__dirname) },
  // All images live in /public/images (copied from the old Webflow site), so no remote hosts are allowed.
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings (e.g. IMAGES) the same way the deployed Worker does.
initOpenNextCloudflareForDev();
