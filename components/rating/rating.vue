<template lang="pug">
    .rating
        span.rating__icon(
            v-for="(star, idx) of 5"
            :class="{'rating__icon_active': idx < rating}"
            :key="idx"
            )
            include ../../assets/svg/star.svg
</template>

<script>
export default {
    name: 'item-rating',
    props: {
        rating: {
            type: [Number, String],
            required: false,
            default: 0,
        },
    },
};
</script>

<style scoped lang="scss">
.rating {
    width: max-content;
    display: flex;
    gap: 5px;

    &__icon {
        display: block;

        & svg {
            display: block;
            fill: $grey-light;
        }

        &_active {
            svg {
                fill: $gold;
            }
        }
    }
}
</style>
