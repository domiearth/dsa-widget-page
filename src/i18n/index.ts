import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh from './locales/zh.json';
import th from './locales/th.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  th: { translation: th },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 預設語言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 