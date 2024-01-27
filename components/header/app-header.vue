<template lang="pug">
header.header
    .container.header__wrapper
        nuxt-link.logo(to="/") Products Catalog
        label.header__sort(
            v-if="!$route.path.includes('/product')"
        )
            span Sort by:
            select(
                v-model="selectedSort"
                @change="updateSelected"
            )
                option(value="cheap") Price down
                option(value="expensive") Price up
                option(selected value="rate") Rating
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'app-header',

    data() {
        return {
            selectedSort: '',
        };
    },

    computed: {
        ...mapState('products', {
            sort: state => state.sort,
        }),
    },

    created() {
        this.setInitialSort();
    },

    methods: {
        ...mapMutations('products', ['updateSort']),
        updateSelected(e) {
            this.$router.replace({ query: { sort: e.target.value } });
            this.updateSort(e.target.value);
        },

        setInitialSort() {
            if (this.$route.query.sort) {
                const currentSort = this.$route.query.sort;
                this.selectedSort = currentSort;
                this.updateSort(currentSort);
            }

            this.selectedSort = this.sort;
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    padding: 15px 30px 30px 15px;
    background: $grey-light;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 576px) {
            flex-direction: column;
        }
    }

    .logo {
        display: inline-block;
        cursor: pointer;
        font-weight: 700;
        font-size: 36px;
        color: $black;

        @media screen and (max-width: 640px) {
            font-size: 25px;
        }
    }

    &__sort {
        select {
            padding: 15px 20px;
            margin-left: 10px;

            @media screen and (max-width: 576px) {
                width: 103%;
                margin-left: -3px;
                padding: 15px 0px;
            }
        }

        @media screen and (max-width: 576px) {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }

    .logo,
    &__sort select {
        outline-color: $primary;
    }

    @media screen and (max-width: 640px) {
        padding: 15px;
    }
}
</style>
