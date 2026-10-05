"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";
import { company, forms } from "@/content/site";

const common = forms.common;

const inputClass =
  "mt-[3px] block min-h-14 w-full border-b border-transparent bg-transparent px-3 py-[14px] text-[14px] font-medium text-ink placeholder:text-muted transition-colors duration-200 hover:border-brand focus:border-brand focus:outline-none aria-[invalid=true]:border-[#ff4747]";

type Variant = "home" | "contactPage" | "job";

type Field = { name: string; label: string; type: string; autoComplete?: string; required: boolean };

/**
 * The enquiry form. `home` is the short form used across the site, `contactPage` is the
 * one on /kontakt, and `job` adds a qualification field and requires a message.
 * `context` (e.g. a job title) is submitted along as a hidden field.
 */
export function ContactForm({ variant = "home", context }: { variant?: Variant; context?: string }) {
  const copy = forms[variant];
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const invalid = (name: string) => state.status === "error" && state.fields.includes(name);
  // React resets the form after each submit; refill it so a failed attempt never loses what was typed.
  const value = (name: string) => (state.status === "error" || state.status === "failed" ? state.values[name] : undefined);

  if (state.status === "success") {
    return (
      <p role="status" className="bg-mint-soft px-4 py-6 text-center text-[14px] leading-6 text-mint-deep">
        {common.success}
      </p>
    );
  }

  const fields: Field[] = [
    { name: "Vorname", label: common.firstName, type: "text", autoComplete: "given-name", required: true },
    { name: "Nachname", label: common.lastName, type: "text", autoComplete: "family-name", required: true },
    { name: "Telefonnummer", label: copy.phone, type: "tel", autoComplete: "tel", required: false },
    { name: "Email", label: common.email, type: "email", autoComplete: "email", required: true },
  ];
  if (variant === "job") {
    fields.push({ name: "Qualifikation", label: forms.job.qualification, type: "text", required: false });
  }

  return (
    <form action={action} className="text-left">
      <input type="hidden" name="kind" value={variant === "job" ? "job" : "contact"} />
      {context && <input type="hidden" name="Stelle" value={context} />}

      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`cf-${f.name}`} className="sr-only">
              {f.label}
            </label>
            <input
              id={`cf-${f.name}`}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              placeholder={f.label}
              defaultValue={value(f.name)}
              aria-invalid={invalid(f.name) || undefined}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label htmlFor="cf-Nachricht" className="sr-only">
          {copy.message}
        </label>
        <textarea
          id="cf-Nachricht"
          name="Nachricht"
          placeholder={copy.message}
          required={variant === "job"}
          maxLength={5000}
          defaultValue={value("Nachricht")}
          aria-invalid={invalid("Nachricht") || undefined}
          className="block min-h-[172px] w-full resize-y border border-line bg-transparent px-3 py-[14px] text-[14px] font-medium text-ink placeholder:text-[#999] transition-colors duration-200 hover:border-brand focus:border-brand focus:outline-none"
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-12 flex items-center justify-center">
        <button
          type="submit"
          disabled={pending}
          className="flex min-h-14 items-center justify-center bg-navy px-11 py-3 text-[14px] leading-5 font-semibold text-white transition-colors duration-300 hover:bg-brand disabled:opacity-70"
        >
          {pending ? common.sending : copy.submit}
        </button>
      </div>

      {state.status === "error" && (
        <p role="alert" className="mt-4 bg-[#ffebeb] px-4 py-3 text-[14px] leading-6 text-[#a30000]">
          {copy.error}
        </p>
      )}
      {state.status === "failed" && (
        <p role="alert" className="mt-4 bg-[#ffebeb] px-4 py-3 text-[14px] leading-6 text-[#a30000]">
          {common.failed}{" "}
          <a href={company.emailHref} className="font-semibold underline">
            {company.email}
          </a>{" "}
          ·{" "}
          <a href={company.phoneHref} className="font-semibold underline">
            {company.phone}
          </a>
        </p>
      )}

      <p className="mt-4 text-[14px] leading-5 font-medium text-ink">{common.consent}</p>
      {copy.showRequiredNote && <p className="text-[14px] leading-5 font-medium text-ink">{common.required}</p>}
    </form>
  );
}
