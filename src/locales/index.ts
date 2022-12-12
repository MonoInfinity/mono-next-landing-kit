import { en } from './en';
import { vi } from './vi';

export const locales = {
    en,
    vi,
};

export type LocaleType = typeof locales.en | typeof locales.vi;
