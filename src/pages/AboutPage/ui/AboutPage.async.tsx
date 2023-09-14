import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // Just for testing loading, remove later!!!
    // @ts-ignore
    setTimeout(()=>resolve(import('./AboutPage')), 1500)
}));