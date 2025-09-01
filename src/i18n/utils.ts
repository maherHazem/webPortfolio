import { labels } from "./ui";
const defaultLang = 'en';

export function useTranslationsLabels(lang: keyof typeof labels) {
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}
