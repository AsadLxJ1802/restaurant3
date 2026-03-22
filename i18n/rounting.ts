import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Loyihada ishlatiladigan tillar
  locales: ['en', 'ru', 'uz'],
  
  // Asosiy (default) til
  defaultLocale: 'ru'
});