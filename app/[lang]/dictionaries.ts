import "server-only";

const dictionaries = {
  he: () => import("./dictionaries/he.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "he" | "en") => {
  if (!["he", "en"].includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    throw new Error(`Error loading locale dictionary for ${locale} – ${error}`);
  }
};
