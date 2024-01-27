<template lang="pug">
section.section
    .container
        catalog(:products="products")
</template>

<script>
import { mapGetters } from 'vuex';
import catalog from '@/components/catalog/catalog';

export default {
    name: 'home',

    components: {
        catalog,
    },

    async fetch({ store }) {
        await store.dispatch('products/getProducts');
    },

    computed: {
        ...mapGetters('products', {
            products: 'sortedProducts',
        }),
    },
};
</script>
