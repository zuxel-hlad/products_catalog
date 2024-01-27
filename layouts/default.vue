<template lang="pug">
.app-wrapper
    app-header
    main
        nuxt
    app-footer
</template>

<script>
import appHeader from '~/components/header/app-header.vue';
import appFooter from '~/components/footer/app-footer.vue';

export default {
    name: 'default',
    components: {
        appHeader,
        appFooter,
    },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
    transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
    opacity: 0;
}
</style>
