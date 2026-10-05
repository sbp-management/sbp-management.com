import { Footer } from "./footer";
import { SiteNav } from "./site-nav";

/**
 * Nav + main + footer. The nav is absolutely positioned (100px tall), so pages either
 * start their first section under it (`offsetNav`, the default) or run underneath it
 * like the home hero (`offsetNav={false}`).
 */
export function PageShell({
  children,
  footerNote,
  showAddress,
  offsetNav = true,
}: {
  children: React.ReactNode;
  footerNote?: string;
  showAddress?: boolean;
  offsetNav?: boolean;
}) {
  return (
    <div className="relative overflow-x-clip">
      <SiteNav />
      <main className={offsetNav ? "pt-[100px]" : undefined}>{children}</main>
      <Footer note={footerNote} showAddress={showAddress} />
    </div>
  );
}
