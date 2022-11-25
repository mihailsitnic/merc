import translationEN from "translations/lang/en";
import translationRU from "translations/lang/ru";
import translationRO from "translations/lang/ro";
import translationUK from "translations/lang/uk";
import { Types } from "translations/types";

const resources = {
  en: {
    translation: translationEN as Types,
  },
  ru: {
    translation: translationRU as Types,
  },
  ro: {
    translation: translationRO as Types,
  },
  uk: {
    translation: translationUK as Types,
  },
};

export default resources;
