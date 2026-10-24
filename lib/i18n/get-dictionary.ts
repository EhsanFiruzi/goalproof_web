import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { fa } from "./dictionaries/fa";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { fa, en };
export const getDictionary = (l: Locale): Dictionary => dictionaries[l];
