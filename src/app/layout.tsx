import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SBP Management | Beratung für medizinische Projekte",
    template: "SBP Management | %s",
  },
  description:
    "Projektbasierte Beratung im medizinischen Sektor: Kliniken, Unternehmen und Institutionen seit 2011.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={beVietnam.variable}>
      <body className="min-h-screen">
        {/* Without JS the reveal animation would leave content hidden. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
