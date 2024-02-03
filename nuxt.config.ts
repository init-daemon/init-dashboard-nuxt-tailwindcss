import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/app.css"],
  modules: ["nuxt-primevue"],
  primevue: {
    unstyled: true,
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },
});
