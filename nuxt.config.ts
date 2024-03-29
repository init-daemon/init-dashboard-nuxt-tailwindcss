import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/app.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxt/ui"],
});
