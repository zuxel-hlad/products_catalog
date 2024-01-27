<template lang="pug">
.catalog-item(
    :class="className"
    )
    .catalog-item__image
        nuxt-img(
            format="webp"
            loading="lazy"
            :src="product?.image" 
            :alt="product?.title || '-'"
        )
    h4.catalog-item__title {{product?.title || '-'}}
    .catalog-item__rating
        rating(
        :rating="Math.round(product?.rating.rate)"
    )
    .catalog-item__footer
        span.catalog-item__price {{product?.price || '-'}}$
        nuxt-link.catalog-item__details(:to="`/product/${product.id}`") See details
</template>

<script>
import rating from '@/components/rating/rating.vue';

export default {
    name: 'catalog-item',
    components: {
        rating,
    },
    props: {
        product: {
            type: Object,
            required: true,
            default: () => ({}),
        },
        className: {
            type: [Array, String, Object],
            required: false,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
.catalog-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 450px;
    border: 1px solid $grey;
    background: $white;
    padding: 20px;
    border-radius: 12px;
    gap: 25px;

    &__image {
        height: 250px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    &__title {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        min-height: 54px;
        flex-grow: 1;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        @media screen and (max-width: 992px) {
            flex-direction: column;
        }
    }

    &__price {
        display: block;
        font-size: 35px;
        font-weight: 500;
    }

    &__rating {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 992px) {
            justify-content: center;
        }
    }

    &__details {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        color: $white;
        padding: 12.5px 15px;
        background-color: $primary;
        border-radius: 5px;
        transition: background-color 0.2s;

        @media (hover: hover) {
            &:hover {
                background-color: $primary-hover;
            }
        }

        &:active {
            background-color: $primary-hover;
        }

        @media screen and (max-width: 992px) {
            width: 100%;
        }
    }
}
</style>
