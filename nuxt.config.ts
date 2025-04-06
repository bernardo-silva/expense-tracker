import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: false,
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear(); // Do not generate any routes (except the defaults)
    },
  },
  app: {
    baseURL: "/expense-tracker/",
    head: {
      link: [
        { rel: "manifest", href: "/expense-tracker/manifest.json" },
      ],
    },
  },
  nitro: {
    prerender: {
      ignore: ["/expense-tracker/manifest.json"],
    },
  },
});
