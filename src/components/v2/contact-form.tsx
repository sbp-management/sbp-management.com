"use client";

import { useState } from "react";
import { company } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

type Copy = Dictionary["contactPage"]["form"];

type FormValues = Record<string, string>;

type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; fields: string[]; values: FormValues }
  // Input was fine but Netlify did not accept the submission (network down, form not deployed).
  | { status: "failed"; values: FormValues };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Fields that need fixing before the form can be sent (field names as in public/__forms.html). */
function invalidFields(values: FormValues, isJob: boolean) {
  const fields: string[] = [];
  if (!values.Vorname?.trim()) fields.push("Vorname");
  if (!values.Nachname?.trim()) fields.push("Nachname");
  if (!EMAIL.test(values.Email?.trim() ?? "")) fields.push("Email");
  // The job application form requires a message; the general form does not.
  if (isJob && !values.Nachricht?.trim()) fields.push("Nachricht");
  return fields;
}

const field =
  "mt-2 block min-h-12 w-full border border-line bg-white px-4 py-3 text-[1rem] text-ink transition-colors placeholder:text-muted/70 hover:border-ink/40 focus:border-brand focus:outline-none aria-[invalid=true]:border-[#c62828]";
const label = "text-[0.8125rem] font-semibold text-ink";

/**
 * Project / contact inquiry, or (with `job`) an application for one job listing. Sent to Netlify Forms
 * (forms "kontakt" and "bewerbung", defined in public/__forms.html): Netlify stores each submission and
 * emails it to us. Field names are the German keys of the old site; labels come from the dictionary.
 */
export function ContactFormV2({
  copy,
  job,
}: {
  copy: Copy;
  /** Title of the job listing this form applies for. */
  job?: { title: string; error: string };
}) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [pending, setPending] = useState(false);
  const invalid = (name: string) =>
    state.status === "error" && state.fields.includes(name);
  // The form is re-rendered after a failed attempt; refill it so nothing typed is lost.
  const value = (name: string) =>
    state.status === "error" || state.status === "failed"
      ? state.values[name]
      : undefined;

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      [...data.entries()].map(([k, v]) => [k, String(v)]),
    );
    const fields = invalidFields(values, !!job);
    if (fields.length) return setState({ status: "error", fields, values });
    setPending(true);
    try {
      // Netlify Forms only accepts submissions posted to a static file (see public/__forms.html).
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(values).toString(),
      });
      setState(res.ok ? { status: "success" } : { status: "failed", values });
    } catch {
      setState({ status: "failed", values });
    } finally {
      setPending(false);
    }
  }

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="bg-green-soft px-5 py-6 text-[1rem] text-green"
      >
        {copy.success}
      </p>
    );
  }

  const inputs = [
    {
      name: "Vorname",
      label: copy.firstName,
      type: "text",
      autoComplete: "given-name",
      required: true,
    },
    {
      name: "Nachname",
      label: copy.lastName,
      type: "text",
      autoComplete: "family-name",
      required: true,
    },
    {
      name: "Email",
      label: copy.email,
      type: "email",
      autoComplete: "email",
      required: true,
    },
    {
      name: "Telefonnummer",
      label: copy.phone,
      type: "tel",
      autoComplete: "tel",
      required: false,
    },
  ];

  return (
    <form onSubmit={submit} noValidate className="grid gap-6">
      <input
        type="hidden"
        name="form-name"
        value={job ? "bewerbung" : "kontakt"}
      />
      {job && <input type="hidden" name="Stelle" value={job.title} />}

      {!job && (
        <div>
          <label htmlFor="cf2-reason" className={label}>
            {copy.reason}
          </label>
          <select
            id="cf2-reason"
            name="Anliegen"
            defaultValue={value("Anliegen") ?? copy.reasons[0]}
            className={field}
          >
            {copy.reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {inputs.map((f) => (
          <div key={f.name}>
            <label htmlFor={`cf2-${f.name}`} className={label}>
              {f.label}
            </label>
            <input
              id={`cf2-${f.name}`}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              defaultValue={value(f.name)}
              aria-invalid={invalid(f.name) || undefined}
              className={field}
            />
          </div>
        ))}
      </div>

      {!job && (
        <div>
          <label htmlFor="cf2-org" className={label}>
            {copy.organization}
          </label>
          <input
            id="cf2-org"
            name="Organisation"
            type="text"
            autoComplete="organization"
            defaultValue={value("Organisation")}
            className={field}
          />
        </div>
      )}

      <div>
        <label htmlFor="cf2-message" className={label}>
          {copy.message}
        </label>
        <textarea
          id="cf2-message"
          name="Nachricht"
          maxLength={5000}
          required={!!job}
          defaultValue={value("Nachricht")}
          aria-invalid={invalid("Nachricht") || undefined}
          className={`${field} min-h-40 resize-y`}
        />
      </div>

      {/* Honeypot: real visitors never see or fill this field. */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="bg-[#fdecec] px-4 py-3 text-[0.9375rem] text-[#a3161a]"
        >
          {job ? job.error : copy.error}
        </p>
      )}
      {state.status === "failed" && (
        <p
          role="alert"
          className="bg-[#fdecec] px-4 py-3 text-[0.9375rem] text-[#a3161a]"
        >
          {copy.failed}{" "}
          <a href={company.emailHref} className="font-semibold underline">
            {company.email}
          </a>{" "}
          ·{" "}
          <a href={company.phoneHref} className="font-semibold underline">
            {company.phone}
          </a>
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[28rem] text-[0.8125rem] text-muted">
          {copy.required} {copy.consent}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 shrink-0 items-center justify-center bg-ink px-7 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand disabled:opacity-60"
        >
          {pending ? copy.sending : copy.submit}
        </button>
      </div>
    </form>
  );
}
