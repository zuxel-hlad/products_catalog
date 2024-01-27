<template lang="pug">
section.section.error-page
    .container.error-page__wrapper
        h1.error-page__title(v-if="error.statusCode === 404") Page not found
        h1.error-page__title(v-else) An error occurred
        nuxt-link.error-page__link(to="/") Go to home
</template>

<script>
export default {
    name: 'error',
    layout: 'single',
    props: {
        error: {
            type: Object,
            required: false,
            default: null,
        },
    },
};
</script>

<style scoped lang="scss">
.error-page {
    min-height: 100vh;
    background: $white;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: inherit;
    }

    &__title {
        font-size: 70px;
        font-weight: 700;

        @media screen and (max-width: 576px) {
            font-size: 45px;
        }

        @media screen and (max-width: 414px) {
            font-size: 35px;
        }
    }

    &__link {
        font-size: 20px;
        font-weight: 500;
        color: $black;
    }
}
</style>
