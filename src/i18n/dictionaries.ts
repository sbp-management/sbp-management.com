import { locale } from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale, type Locale, type PageKey } from "./config";
import { de } from "./de";
import { en } from "./en";
import { ru } from "./ru";
import { sr } from "./sr";

export type StatusTone = "active" | "planned" | "ongoing";

/** de.ts (the master text) with its literal strings widened, so a translation can say anything in the same shape. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: K extends "link" ? PageKey : K extends "tone" ? StatusTone : Widen<T[K]> };

/** Each translation must have exactly the shape of the German dictionary. */
export type Dictionary = Widen<typeof de>;

const dictionaries: Record<Locale, Dictionary> = { en, de, ru, sr };

/** Locale of the current request, read from the [locale] root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await locale();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

export async function getDictionary() {
  return dictionaries[await getLocale()];
}
