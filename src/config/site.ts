export const SITE_NAME = 'JM Palau Alegria';
export const SITE_TITLE = 'JM Palau Alegria — Senior Frontend Developer';
export const SITE_DESCRIPTION =
  'Senior Frontend Developer with 7 years of experience building fast, accessible web applications with React and TypeScript.';

// Absolute origin of the deployed site, used for
// canonical and Open Graph URLs. Can be overridden with VITE_SITE_URL.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://palgria.es').replace(/\/$/, '');

export const absoluteUrl = (path: string) => (SITE_URL ? `${SITE_URL}${path}` : path);

// Contentful entry holding the home page content.
export const HOME_ENTRY_ID = '60c5ZyxrvbRsBjpPwJ8kRQ';

export const CV_PATH = '/cv.pdf';
export const CV_FILENAME = 'Jose_MP_Alegria_Resume.pdf';
