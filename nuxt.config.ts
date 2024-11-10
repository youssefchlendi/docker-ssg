const googleFontsLink =
  "https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/utilities.css",
    "@/assets/css/global.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Nathan Friend - Résumé",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nathan Friend's résumé. Built with NuxtJS and Tailwind CSS.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: "Nathan Friend - Résumé",
      },
      {
        property: "og:description",
        content: "Nathan Friend's résumé. Built with NuxtJS and Tailwind CSS.",
      },
      {
        property: "og:image",
        content: "https://resume.nathanfriend.io/screenshot.png",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        name: "msapplication-TileColor",
        content: "#2d89ef",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
    link: [
      {
        rel: "preconnect",
        crossorigin: true,
        href: googleFontsLink,
      },
      {
        rel: "stylesheet",
        href: googleFontsLink,
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    script: [
      {
        src: "google-analytics-setup.js",
        body: true,
        class: "do-not-strip",
      },
      {
        src: "https://www.google-analytics.com/analytics.js",
        async: true,
        body: true,
        class: "do-not-strip",
      },
    ],
  },
  loading: { color: "#fff" },
  plugins: ["~/plugins/global-data"],
  runtimeConfig: {
    public: {
      isProduction: Boolean(process.env.CI),
      gitlabCi: {
        timestamp: new Date().toISOString(),
        projectUrl: process.env.CI_PROJECT_URL,
        commitSha: process.env.CI_COMMIT_SHORT_SHA,
      },
    },
  },
});
