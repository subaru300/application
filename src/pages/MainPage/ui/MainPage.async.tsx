import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      // задержка для теста
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
