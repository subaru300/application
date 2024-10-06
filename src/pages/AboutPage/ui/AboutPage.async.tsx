import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      // задержка для теста
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
