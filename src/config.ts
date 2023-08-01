// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Brent Doering - Freelance Developer and Project Manager based in Denver, CO";
export const SITE_DESCRIPTION =
  "Welcome to my portfolio, this is where I house my work and relevant blog posts.";
export const TWITTER_HANDLE = "@brentcodesio";
export const MY_NAME = "Brent Doering";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
