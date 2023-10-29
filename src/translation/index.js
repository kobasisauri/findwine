/* eslint-disable global-require */
import I18n from "i18n-js";

I18n.translations = {
  ge: require("./translations/geo.json"),
  en: require("./translations/en.json"),
};

const availableTranslations = {
  ge: require("./translations/geo.json"),
  en: require("./translations/en.json"),
};

// I18n.defaultLocale = 'ge';
I18n.locale = "en";
I18n.fallbacks = true;

export const t = (key) => I18n.t(key);

export const changeLanguage = (languageCode) => {
  I18n.translations = {
    [languageCode]: availableTranslations[languageCode],
  };
  I18n.locale = languageCode;
};

I18n.fallbacks = true;
export default I18n;
