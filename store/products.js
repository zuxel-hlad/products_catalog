export const state = () => ({
    products: [],
    product: null,
    sort: 'rate',
    error: false,
});

export const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },

    setProduct(state, payload) {
        state.product = payload;
    },

    setError(state, payload) {
        state.error = payload;
    },

    updateSort(state, payload) {
        state.sort = payload;
    },
};

export const getters = {
    sortedProducts(state) {
        switch (state.sort) {
            case 'cheap':
                return [...state.products].sort((a, b) => (a.price < b.price ? -1 : 1));
            case 'expensive':
                return [...state.products].sort((a, b) => (a.price > b.price ? -1 : 1));
            default:
                return [...state.products].sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1));
        }
    },
};

export const actions = {
    async getProducts({ state, commit }) {
        if (state.error) {
            commit('setError', false);
        }
        try {
            const products = await this.$api.getAllProducts();
            commit('setProducts', products);
        } catch {
            commit('setError', true);
        }
    },

    async getProduct({ state, commit }, payload) {
        if (state.error) {
            commit('setError', false);
        }
        try {
            const product = await this.$api.getOneProduct(payload);
            commit('setProduct', product);
        } catch {
            commit('setError', true);
        }
    },
};
