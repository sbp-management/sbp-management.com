"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { kind: "approve" | "risk"; note: string; el: Element };

/** Development-only list of the review marks on the current page; click an item to jump to it. */
export function ReviewPanel() {
  const pathname = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Read the marks after the page has rendered.
    const id = window.setTimeout(() => {
      setItems(
        [...document.querySelectorAll("[data-review]")].map((el) => ({
          kind: el.getAttribute("data-review") as Item["kind"],
          note: el.getAttribute("data-review-note") ?? "",
          el,
        })),
      );
    }, 300);
    return () => window.clearTimeout(id);
  }, [pathname]);

  if (!items.length) return null;
  const risks = items.filter((i) => i.kind === "risk").length;
  const approvals = items.length - risks;

  return (
    <div className="fixed bottom-4 left-16 z-[90] max-w-[22rem] font-sans text-[0.8125rem]">
      {open && (
        <ul className="mb-2 max-h-[60vh] overflow-y-auto border border-line bg-white p-2 shadow-lift">
          {items.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => item.el.scrollIntoView({ block: "center" })}
                className="flex w-full items-start gap-2 px-2 py-1.5 text-left text-ink hover:bg-paper"
              >
                <span
                  aria-hidden
                  className={`mt-1 size-2.5 shrink-0 ${item.kind === "risk" ? "bg-[#e11d2e]" : "bg-[#ffd60a]"}`}
                />
                <span>
                  <span className="sr-only">
                    {item.kind === "risk" ? "Risk: " : "Approval: "}
                  </span>
                  {item.note}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-3 bg-ink px-3 py-2 font-semibold text-white shadow-lift"
      >
        Review
        <span className="flex items-center gap-1">
          <span aria-hidden className="size-2.5 bg-[#ffd60a]" />
          {approvals}
          <span className="sr-only"> approvals</span>
        </span>
        <span className="flex items-center gap-1">
          <span aria-hidden className="size-2.5 bg-[#e11d2e]" />
          {risks}
          <span className="sr-only"> risks</span>
        </span>
      </button>
    </div>
  );
}
