<template lang="pug">
transition-group(
    name="list" 
    class="catalog" 
    tag="div"
)
    catalog-item(
        v-for="(item, idx) in products"
        className="catalog__card"
        :product="item" 
        :key="`${item.id}-${idx}`")
    span.catalog__empty(
        v-if="!products.length"
    ) No products now.
        
</template>

<script>
import catalogItem from '@/components/catalog/catalog-item.vue';

export default {
    name: 'product-catalog',

    components: {
        catalogItem,
    },

    props: {
        products: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
};
</script>

<style scoped lang="scss">
.catalog {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    &__empty {
        display: block;
        margin: 0 auto;
        font-size: 18px;
    }

    &__card {
        max-width: calc(25% - 15px);

        @media screen and (max-width: 1200px) {
            max-width: calc(33.33% - 15px);
        }

        @media screen and (max-width: 768px) {
            max-width: calc(50% - 10px);
        }

        @media screen and (max-width: 576px) {
            max-width: 100%;
        }
    }
}
</style>
