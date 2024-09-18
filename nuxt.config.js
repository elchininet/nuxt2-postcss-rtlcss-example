export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'postcss-rtlcss-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {}
    ],
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: [
      {
        code: 'ar',
        name: 'عربي',
        iso: 'ar-UAE',
        dir: 'rtl',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        dir: 'ltr',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          language: 'Language',
          welcome: 'Welcome to your Nuxt Application',
          documentation: 'We recommend you take a look at the <a class="button--doc text-green-500 hover:underline" href="https://nuxtjs.org" target="_blank">Nuxt Documentation</a>, whether you are new or have previous experience with the framework.',
          tutorial: 'To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!'
        },
        ar: {
          language: 'لغة',
          welcome: 'مرحباً بكم في تطبيق Nuxt الخاص بكم',
          documentation: 'ننصحك بإلقاء نظرة على <a class="button--doc text-green-500 hover:underline" href="https://nuxtjs.org" target="_blank">وثائق Nuxt</a>، سواء كنت جديدًا أو لديك خبرة سابقة مع الإطار.',
          tutorial: 'للبدء، قم بإزالة <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> وابدأ في كتابة التعليمات البرمجية في <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. استمتع!'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-rtlcss': {
          safeBothPrefix: true
        },
      }
    }
  }
}
