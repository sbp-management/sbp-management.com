import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="px-[5%] py-[120px]">
        <div className="mx-auto max-w-[1080px]">
          <p className="mb-24 text-[14px] leading-5 text-ink">404</p>
          <h1 className="mb-4 text-[48px] leading-[57.6px] font-bold tracking-[-0.04em] text-ink">Seite nicht gefunden</h1>
          <p className="text-[16px] leading-6 text-body">
            Die gesuchte Seite existiert nicht oder wurde verschoben.{" "}
            <Link href="/" className="text-brand underline underline-offset-4">
              Zur Startseite
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
