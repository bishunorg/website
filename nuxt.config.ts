import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@nuxtjs/seo"],
  ssr: true,
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#16a085" },
      ],
      titleTemplate: "%s",
    },
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/app.css",
  ],
  site: {
    url: "https://bishun.org",
    name: "Bishun",
    description: "Bishun helps learners of all backgrounds master Chinese character writing with correct stroke order animations, pronunciation, meanings, random writing practice, and character origin and history content.",
  },
  devServer: {
    host: "0.0.0.0",
    port: 18088,
  },
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@unhead/schema-org/vue"],
    },
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
        commaDangle: "always-multiline",
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "zh-CN", language: "zh-CN", name: "简体中文", file: "zh-CN.json" },
    ],
  },
  ogImage: { zeroRuntime: true },
  seo: {
    meta: {
      robots: "index, follow, max-image-preview:large",
      ogType: "website",
      ogImage: "https://bishun.org/og.jpg",
      twitterCard: "summary_large_image",
      twitterImage: "https://bishun.org/og.jpg",
      applicationName: "Bishun",
    },
  },
});
