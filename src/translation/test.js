/* eslint-disable global-require */
// import * as Localization from 'expo-localization';
// import i18n from 'i18n-js';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// i18n.translations = {
//   ge: require('./translations/geo.json'),
//   en: require('./translations/en.json'),
// };

// i18n.defaultLocale = 'ge';
// i18n.locale = Localization.locale;
// i18n.fallbacks = true;

const resources = {
  fr: {
    foo: 'como telle fous',
    bar: 'chatouiller {{someValue}}',
  },
  en: {
    foo: 'Fooasas',
    bar: 'Bar {{someValue}}',
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources,
});

i18n.addResources('en', 'translations', { foo: 'Fooasas' });

i18n.getFixedT('en');

export const t = (key) => i18n.t(key);

export default i18n;
