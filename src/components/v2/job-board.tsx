"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "./ui";

export type JobBoardItem = {
  slug: string;
  href: string;
  title: string;
  category: string;
  department: string;
  /** Department name in the page's language. */
  departmentLabel: string;
  city: string;
};

type Labels = {
  department: string;
  location: string;
  all: string;
  /** "{n}" is replaced by the number of listings shown. */
  count: string;
  ref: string;
  view: string;
};

/** Row of filter chips; `null` = no filter. */
function Chips({
  label,
  options,
  value,
  onChange,
  all,
}: {
  label: string;
  /** `empty`: no listing matches together with the other filter (greyed out). */
  options: { value: string; label: string; empty?: boolean }[];
  value: string | null;
  onChange: (value: string | null) => void;
  all: string;
}) {
  const chip = (active: boolean) =>
    `border px-3.5 py-1.5 text-[0.8125rem] font-semibold transition-colors disabled:cursor-default disabled:opacity-35 disabled:hover:border-line ${
      active
        ? "border-ink bg-ink text-white"
        : "border-line bg-white text-ink hover:border-ink"
    }`;
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
      <p className="w-28 shrink-0 text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={value === null}
          onClick={() => onChange(null)}
          className={chip(value === null)}
        >
          {all}
        </button>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            disabled={o.empty && value !== o.value}
            onClick={() => onChange(value === o.value ? null : o.value)}
            className={chip(value === o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * The job listings with a filter by department and by town. Every listing is in the HTML from the
 * start (search engines see all of them); the filter only hides the ones that don't match.
 */
export function JobBoard({
  items,
  labels,
}: {
  items: JobBoardItem[];
  labels: Labels;
}) {
  const [department, setDepartment] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const departments = [
    ...new Map(items.map((j) => [j.department, j.departmentLabel])),
  ]
    .map(([value, label]) => ({
      value,
      label,
      empty: !items.some(
        (j) => j.department === value && (!city || j.city === city),
      ),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
  const cities = [...new Set(items.map((j) => j.city))].sort().map((c) => ({
    value: c,
    label: c,
    empty: !items.some(
      (j) => j.city === c && (!department || j.department === department),
    ),
  }));
  const shown = items.filter(
    (j) =>
      (!department || j.department === department) &&
      (!city || j.city === city),
  );

  return (
    <div>
      <div className="grid gap-4 border-t border-line pt-6">
        <Chips
          label={labels.department}
          options={departments}
          value={department}
          onChange={setDepartment}
          all={labels.all}
        />
        <Chips
          label={labels.location}
          options={cities}
          value={city}
          onChange={setCity}
          all={labels.all}
        />
        <p aria-live="polite" className="text-[0.875rem] text-muted">
          {labels.count.replace("{n}", String(shown.length))}
        </p>
      </div>
      <ul className="mt-6 border-t border-line">
        {items.map((job) => (
          <li
            key={job.slug}
            hidden={!shown.includes(job)}
            className="border-b border-line"
          >
            <Link
              href={job.href}
              className="group grid gap-2 py-5 transition-colors hover:bg-white sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
            >
              <span className="text-[0.75rem] font-bold tracking-[0.1em] text-muted uppercase">
                {labels.ref} {job.category}
              </span>
              <span>
                <span
                  lang="de"
                  className="block font-display text-[1.25rem] leading-snug text-ink group-hover:text-brand"
                >
                  {job.title}
                </span>
                <span className="mt-1 block text-[0.875rem] text-muted">
                  {job.departmentLabel} · {job.city}
                </span>
              </span>
              <span className="flex items-center gap-2 text-[0.875rem] font-semibold text-ink group-hover:text-brand">
                {labels.view}
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
