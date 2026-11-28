"use client";

import { useActionState, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { submitQuickApplication, type QuickApplyState } from "@/app/quick-apply-action";
import { trackLead } from "@/components/v2/analytics";
import {
  quickBerufForGroup,
  quickContact,
  quickLimits,
  quickOptions,
  quickPosition,
  quickPositions,
} from "@/content/quick-apply";
import { company } from "@/content/site";
import type { QuickField } from "@/lib/quick-apply-email";

type Answers = {
  stelle: string;
  beruf: string;
  anerkennung: string;
  deutsch: string;
  verfuegbarkeit: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  nachricht: string;
  einwilligung: boolean;
};

const STEPS: { title: string; fields: QuickField[] }[] = [
  { title: "Die Stelle", fields: ["stelle", "beruf"] },
  { title: "Drei kurze Fragen", fields: ["anerkennung", "deutsch", "verfuegbarkeit"] },
  { title: "Kontakt", fields: ["vorname", "nachname", "email", "telefon", "nachricht", "einwilligung"] },
];

const ERRORS: Record<QuickField, string> = {
  stelle: "Bitte wählen Sie eine Stelle aus.",
  beruf: "Bitte wählen Sie Ihren Beruf aus.",
  anerkennung: "Bitte beantworten Sie die Frage zur Anerkennung.",
  deutsch: "Bitte wählen Sie Ihre Deutschkenntnisse aus.",
  verfuegbarkeit: "Bitte wählen Sie aus, ab wann Sie anfangen können.",
  vorname: "Bitte geben Sie Ihren Vornamen an.",
  nachname: "Bitte geben Sie Ihren Nachnamen an.",
  email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
  telefon: "Bitte geben Sie Ihre Telefonnummer mit Ländervorwahl an (z. B. +49 …).",
  nachricht: "Die Nachricht darf höchstens 1.500 Zeichen lang sein.",
  einwilligung: "Bitte bestätigen Sie die Einwilligung, damit wir Sie kontaktieren dürfen.",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Same rules as readQuickForm() on the server, for the fields of one step. */
function invalid(a: Answers, fields: QuickField[]) {
  const bad: Record<QuickField, boolean> = {
    stelle: !quickPosition(a.stelle),
    beruf: !a.beruf,
    anerkennung: !a.anerkennung,
    deutsch: !a.deutsch,
    verfuegbarkeit: !a.verfuegbarkeit,
    vorname: !a.vorname.trim(),
    nachname: !a.nachname.trim(),
    email: !EMAIL.test(a.email.trim()),
    telefon: (a.telefon.match(/\d/g) ?? []).length < 6,
    nachricht: a.nachricht.length > quickLimits.message,
    einwilligung: !a.einwilligung,
  };
  return fields.filter((f) => bad[f]);
}

/* Ad tags (utm_*) from the landing URL, kept in sessionStorage for this tab only (no cookies). */
type Utm = { source: string; medium: string; campaign: string; content: string };
const UTM_KEY = "sbp_quick_utm";
const NO_UTM = JSON.stringify({ source: "", medium: "", campaign: "", content: "" } satisfies Utm);

function urlUtm(): string | null {
  const p = new URLSearchParams(window.location.search);
  if (!p.get("utm_source") && !p.get("utm_campaign")) return null;
  return JSON.stringify({
    source: p.get("utm_source") ?? "",
    medium: p.get("utm_medium") ?? "",
    campaign: p.get("utm_campaign") ?? "",
    content: p.get("utm_content") ?? "",
  } satisfies Utm);
}

function utmSnapshot(): string {
  try {
    return urlUtm() ?? sessionStorage.getItem(UTM_KEY) ?? NO_UTM;
  } catch {
    return NO_UTM;
  }
}

const noSubscription = () => () => {};

const field =
  "mt-2 block min-h-12 w-full border border-line bg-white px-4 py-3 text-[1rem] text-ink transition-colors placeholder:text-muted/70 hover:border-ink/40 focus:border-brand focus:outline-none aria-[invalid=true]:border-[#c62828]";
const label = "text-[0.875rem] font-semibold text-ink";

function FieldError({ show, field: f }: { show: boolean; field: QuickField }) {
  if (!show) return null;
  return (
    <p id={`qa-${f}-error`} className="mt-2 text-[0.875rem] text-[#a3161a]">
      {ERRORS[f]}
    </p>
  );
}

/** Radio group shown as large tap buttons. */
function Choice({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  columns = 2,
}: {
  name: QuickField;
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  columns?: 1 | 2;
}) {
  return (
    <fieldset aria-describedby={error ? `qa-${name}-error` : undefined}>
      <legend className={label}>{legend}</legend>
      <div className={`mt-3 grid gap-2.5 ${columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
        {options.map((o) => (
          <label
            key={o}
            className={`flex min-h-14 cursor-pointer items-center justify-center border px-3 py-3 text-center text-[1rem] font-semibold transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
              value === o
                ? "border-ink bg-ink text-white"
                : `bg-white text-ink hover:border-ink ${error ? "border-[#c62828]" : "border-line"}`
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            {o}
          </label>
        ))}
      </div>
      <FieldError show={error} field={name} />
    </fieldset>
  );
}

/**
 * The "Schnellbewerbung" form: three steps (position, three questions, contact) with a progress bar.
 * All steps stay in the form, so going back keeps every answer; each step is checked before the next.
 * Sent to submitQuickApplication (Resend → info@); on success the form is replaced by a thank-you note
 * and the consent-gated GA event generate_lead is reported.
 */
export function QuickApplyForm({
  initialStelle,
  privacyHref,
}: {
  initialStelle?: string;
  privacyHref: string;
}) {
  const preset = quickPosition(initialStelle);
  const [answers, setAnswers] = useState<Answers>({
    stelle: preset?.slug ?? "",
    beruf: preset?.group ? quickBerufForGroup[preset.group] : "",
    anerkennung: "",
    deutsch: "",
    verfuegbarkeit: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: "",
    einwilligung: false,
  });
  const [berufTouched, setBerufTouched] = useState(false);
  const [step, setStep] = useState(0);
  const [shown, setShown] = useState<QuickField[]>([]);
  const [state, formAction, pending] = useActionState<QuickApplyState, FormData>(
    submitQuickApplication,
    { status: "idle" },
  );
  const top = useRef<HTMLDivElement>(null);

  const utm = JSON.parse(useSyncExternalStore(noSubscription, utmSnapshot, () => NO_UTM)) as Utm;
  useEffect(() => {
    const fromUrl = urlUtm();
    if (!fromUrl) return;
    try {
      sessionStorage.setItem(UTM_KEY, fromUrl);
    } catch {
      // Storage disabled: the tag still goes with this page's form, it just won't survive a reload.
    }
  }, []);

  const reported = useRef(false);
  const thanks = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state.status === "success" && !reported.current) {
      reported.current = true;
      // The thank-you note is much shorter than the form: bring it into view (on phones the page
      // would otherwise stay scrolled down to the footer).
      thanks.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      trackLead("schnellbewerbung", { source: utm.source, campaign: utm.campaign, content: utm.content });
    }
  }, [state.status, utm.source, utm.campaign, utm.content]);

  const serverFields = state.status === "error" ? state.fields : [];
  const err = (f: QuickField) => shown.includes(f) || serverFields.includes(f);
  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setShown((s) => s.filter((f) => f !== key));
  };

  const goTo = (next: number) => {
    setStep(next);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const next = () => {
    const bad = invalid(answers, STEPS[step].fields);
    setShown(bad);
    if (!bad.length) goTo(step + 1);
  };

  if (state.status === "success") {
    return (
      <div ref={thanks} role="status" className="scroll-mt-28 border border-line bg-white p-6 sm:p-8">
        <h2 className="font-display text-[1.75rem] leading-tight font-medium text-ink">
          Vielen Dank für Ihre Bewerbung!
        </h2>
        <p className="mt-4 text-[1.0625rem] leading-relaxed">
          {quickContact.name} von SBP Management meldet sich in Kürze bei Ihnen. Sie erhalten außerdem
          eine Eingangsbestätigung per E-Mail.
        </p>
        <a
          href={quickContact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center bg-ink px-6 text-[1rem] font-semibold text-white transition-colors hover:bg-brand"
        >
          Per WhatsApp schreiben
        </a>
      </div>
    );
  }

  const position = quickPosition(answers.stelle);

  return (
    <div ref={top} className="scroll-mt-28 border border-line bg-white p-5 sm:p-8">
      {/* Progress */}
      <div>
        <p className="text-[0.8125rem] font-bold tracking-[0.1em] text-muted uppercase">
          Schritt {step + 1} von {STEPS.length} · {STEPS[step].title}
        </p>
        <div
          className="mt-3 h-1.5 w-full bg-line"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={STEPS.length}
          aria-valuenow={step + 1}
          aria-label="Fortschritt"
        >
          <div
            className="h-full bg-brand transition-[width] duration-300"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      <form
        action={formAction}
        noValidate
        onSubmit={(e) => {
          // The last step's button submits; the earlier steps are checked again in case of a jump.
          const bad = invalid(answers, STEPS.flatMap((s) => s.fields));
          if (bad.length) {
            e.preventDefault();
            setShown(bad);
            const first = STEPS.findIndex((s) => s.fields.some((f) => bad.includes(f)));
            if (first !== step) goTo(first);
          }
        }}
        className="mt-7"
      >
        {/* Ad tags and the spam trap; einwilligung as a fixed value when ticked. */}
        <input type="hidden" name="utm_source" value={utm.source} />
        <input type="hidden" name="utm_medium" value={utm.medium} />
        <input type="hidden" name="utm_campaign" value={utm.campaign} />
        <input type="hidden" name="utm_content" value={utm.content} />
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Step 1 · Die Stelle */}
        <div hidden={step !== 0} className="grid gap-7">
          <div>
            <label htmlFor="qa-stelle" className={label}>
              Für welche Stelle interessieren Sie sich?
            </label>
            <select
              id="qa-stelle"
              name="stelle"
              value={answers.stelle}
              onChange={(e) => {
                const slug = e.currentTarget.value;
                const group = quickPosition(slug)?.group;
                setAnswers((a) => ({
                  ...a,
                  stelle: slug,
                  beruf: !berufTouched && group ? quickBerufForGroup[group] : a.beruf,
                }));
                setShown((s) => s.filter((f) => f !== "stelle"));
              }}
              aria-invalid={err("stelle") || undefined}
              aria-describedby={err("stelle") ? "qa-stelle-error" : undefined}
              className={field}
            >
              <option value="">Bitte auswählen</option>
              {quickPositions.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.title}
                </option>
              ))}
            </select>
            <FieldError show={err("stelle")} field="stelle" />
          </div>
          <Choice
            name="beruf"
            legend="Ihr Beruf"
            options={quickOptions.beruf}
            value={answers.beruf}
            onChange={(v) => {
              setBerufTouched(true);
              set("beruf", v);
            }}
            error={err("beruf")}
          />
        </div>

        {/* Step 2 · Drei kurze Fragen */}
        <div hidden={step !== 1} className="grid gap-7">
          <Choice
            name="anerkennung"
            legend="Ist Ihr Abschluss in Deutschland anerkannt?"
            options={quickOptions.anerkennung}
            value={answers.anerkennung}
            onChange={(v) => set("anerkennung", v)}
            error={err("anerkennung")}
          />
          <Choice
            name="deutsch"
            legend="Wie gut sprechen Sie Deutsch?"
            options={quickOptions.deutsch}
            value={answers.deutsch}
            onChange={(v) => set("deutsch", v)}
            error={err("deutsch")}
          />
          <Choice
            name="verfuegbarkeit"
            legend="Ab wann können Sie anfangen?"
            options={quickOptions.verfuegbarkeit}
            value={answers.verfuegbarkeit}
            onChange={(v) => set("verfuegbarkeit", v)}
            error={err("verfuegbarkeit")}
          />
        </div>

        {/* Step 3 · Kontakt */}
        <div hidden={step !== 2} className="grid gap-6">
          {position && (
            <p className="text-[0.9375rem] text-muted">
              Ihre Bewerbung: <span className="font-semibold text-ink">{position.title}</span>
            </p>
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            {(
              [
                ["vorname", "Vorname", "text", "given-name", quickLimits.name],
                ["nachname", "Nachname", "text", "family-name", quickLimits.name],
              ] as const
            ).map(([name, text, type, auto, max]) => (
              <div key={name}>
                <label htmlFor={`qa-${name}`} className={label}>
                  {text}
                </label>
                <input
                  id={`qa-${name}`}
                  name={name}
                  type={type}
                  autoComplete={auto}
                  maxLength={max}
                  value={answers[name]}
                  onChange={(e) => set(name, e.currentTarget.value)}
                  aria-invalid={err(name) || undefined}
                  aria-describedby={err(name) ? `qa-${name}-error` : undefined}
                  className={field}
                />
                <FieldError show={err(name)} field={name} />
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="qa-email" className={label}>
              E-Mail
            </label>
            <input
              id="qa-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={quickLimits.email}
              value={answers.email}
              onChange={(e) => set("email", e.currentTarget.value)}
              aria-invalid={err("email") || undefined}
              aria-describedby={err("email") ? "qa-email-error" : undefined}
              className={field}
            />
            <FieldError show={err("email")} field="email" />
          </div>
          <div>
            <label htmlFor="qa-telefon" className={label}>
              Telefon / WhatsApp (mit Ländervorwahl, z. B. +49 …)
            </label>
            <input
              id="qa-telefon"
              name="telefon"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+49 …"
              maxLength={quickLimits.phone}
              value={answers.telefon}
              onChange={(e) => set("telefon", e.currentTarget.value)}
              aria-invalid={err("telefon") || undefined}
              aria-describedby={err("telefon") ? "qa-telefon-error" : undefined}
              className={field}
            />
            <FieldError show={err("telefon")} field="telefon" />
          </div>
          <div>
            <label htmlFor="qa-nachricht" className={label}>
              Nachricht (optional)
            </label>
            <textarea
              id="qa-nachricht"
              name="nachricht"
              maxLength={quickLimits.message}
              value={answers.nachricht}
              onChange={(e) => set("nachricht", e.currentTarget.value)}
              aria-invalid={err("nachricht") || undefined}
              className={`${field} min-h-28 resize-y`}
            />
            <FieldError show={err("nachricht")} field="nachricht" />
          </div>
          <div>
            <label className="flex cursor-pointer items-start gap-3 text-[0.9375rem] leading-relaxed">
              <input
                type="checkbox"
                name="einwilligung"
                value="ja"
                checked={answers.einwilligung}
                onChange={(e) => set("einwilligung", e.currentTarget.checked)}
                aria-invalid={err("einwilligung") || undefined}
                aria-describedby={err("einwilligung") ? "qa-einwilligung-error" : undefined}
                className="mt-1 size-5 shrink-0 accent-[var(--color-ink)]"
              />
              <span>
                Ich bin damit einverstanden, dass SBP Management meine Angaben zur Vermittlung
                passender Stellen speichert und mich per Telefon, WhatsApp oder E-Mail kontaktiert.
                Ich kann diese Einwilligung jederzeit widerrufen.{" "}
                <a
                  href={privacyHref}
                  target="_blank"
                  rel="noopener"
                  className="text-brand underline underline-offset-4"
                >
                  Datenschutzerklärung
                </a>
              </span>
            </label>
            <FieldError show={err("einwilligung")} field="einwilligung" />
          </div>
        </div>

        {state.status === "failed" && (
          <p role="alert" className="mt-6 bg-[#fdecec] px-4 py-3 text-[0.9375rem] text-[#a3161a]">
            Ihre Bewerbung konnte nicht gesendet werden. Bitte schreiben Sie uns direkt:{" "}
            <a href={company.emailHref} className="font-semibold underline">
              {company.email}
            </a>{" "}
            ·{" "}
            <a href={quickContact.whatsappHref} className="font-semibold underline">
              WhatsApp
            </a>
          </p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              className="min-h-12 border border-ink bg-white px-6 text-[1rem] font-semibold text-ink transition-colors hover:bg-paper"
            >
              Zurück
            </button>
          ) : (
            <span />
          )}
          {/* Separate keys: otherwise React reuses the "Weiter" button as the submit button, and the
              click that leads to the last step would already submit the form. */}
          {step < STEPS.length - 1 ? (
            <button
              key="next"
              type="button"
              onClick={next}
              className="min-h-12 bg-ink px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-brand"
            >
              Weiter
            </button>
          ) : (
            <button
              key="submit"
              type="submit"
              disabled={pending}
              className="min-h-12 bg-ink px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-brand disabled:opacity-60"
            >
              {pending ? "Wird gesendet…" : "Bewerbung absenden"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
