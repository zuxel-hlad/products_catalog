<template lang="pug">
section.section
    .container
        .product
            .product__image
                nuxt-img(
                    format="webp"
                    loading="lazy"
                    :src="product.image" 
                    :alt="product?.title || '-'"
                )
            .product__info
                .product__category Category: {{product?.category || '-'}}
                .product__rating
                    rating(:rating="product?.rating?.rate")
                .product__title {{product?.title || '-'}}
                p.product__description {{product?.description || '-'}}
                .product__footer
                    p.product__price {{product?.price || '-'}}$
                    nuxt-link.product__link(to="/") Go back
    
</template>

<script>
import { mapState } from 'vuex';
import rating from '@/components/rating/rating.vue';

export default {
    name: 'product-details',
    components: {
        rating,
    },

    validate({ params }) {
        return /^\d+$/.test(params.slug);
    },

    async fetch({ store, params, redirect }) {
        if (!params.slug) redirect('/');
        await store.dispatch('products/getProduct', params.slug);
    },

    computed: {
        ...mapState({
            product: state => state?.products?.product,
        }),
    },

    created() {
        if (Number(this.$route.params.slug) !== this.product.id) {
            this.$router.push('/error');
        }
    },
};
</script>

<style scoped lang="scss">
.product {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    gap: 50px;

    &__image {
        width: calc(50% - 25px);
        height: 600px;
        margin: 0 auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        @media screen and (max-width: 768px) {
            max-width: 400px;
            height: 500px;
        }

        @media screen and (max-width: 576px) {
            width: 100%;
            max-width: 300px;
            height: 400px;
        }
    }

    &__info {
        width: calc(50% - 25px);
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 576px) {
            width: 100%;
        }
    }

    &__category {
        font-size: 35px;
        text-transform: capitalize;
        margin-bottom: 15px;

        @media screen and (max-width: 768px) {
            font-size: 25px;
        }

        @media screen and (max-width: 576px) {
            font-size: 16px;
        }
    }

    &__title {
        font-size: 50px;
        font-weight: 700;

        @media screen and (max-width: 992px) {
            font-size: 40px;
        }

        @media screen and (max-width: 768px) {
            font-size: 35px;
        }

        @media screen and (max-width: 576px) {
            font-size: 25px;
        }
    }

    &__description {
        font-size: 18px;
        font-weight: 500;
        max-width: 80%;
        margin-bottom: 15px;
        flex-grow: 1;
    }

    &__rating {
        margin-bottom: 15px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 10px;
    }

    &__link {
        font-weight: 500;
        color: $black;
        padding: 10px;
        border: 1px solid $grey;
        border-radius: 5px;
    }

    &__price {
        font-size: 35px;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
}
</style>
