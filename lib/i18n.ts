export const locales = ["tr", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Dictionary = typeof import("../dictionaries/tr.json");

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case "tr":
      return (await import("../dictionaries/tr.json")).default;
    case "en":
      return (await import("../dictionaries/en.json")).default;
    case "ru":
      return (await import("../dictionaries/ru.json")).default;
  }
}

