<template lang="pug">
footer.footer
    span.footer__info Created by Stanislav Shchelokov
</template>

<script>
export default {
    name: 'app-footer',
};
</script>

<style lang="scss" scoped>
.footer {
    padding: 15px;
    background: $grey-light;

    &__info {
        display: block;
        text-align: center;
    }
}
</style>
