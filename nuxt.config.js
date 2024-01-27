export default {
    target: 'static',

    generate: {
        fallback: true,
    },

    head: {
        title: 'Catalog App',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['~/assets/styles/main.scss'],

    plugins: ['~/plugins/$api.js'],

    components: false,

    buildModules: ['@nuxtjs/eslint-module', '@nuxt/image'],

    image: {
        domains: ['localhost', 'fakestoreapi.com'],
    },

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Noto Sans': [300, 400, 500, 700],
                },
            },
        ],
    ],

    styleResources: {
        scss: ['./assets/styles/*.scss'],
        hoistUseStatements: true,
    },

    axios: {
        baseURL: '/',
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },

    build: {},

    loading: false,
};
