// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:8000'
        }
    },
    css: ['~/assets/css/main.css'],
    build: {
        transpile: ['vue-toastification'],
    },
})
