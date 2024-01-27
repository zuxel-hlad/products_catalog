const baseURL = 'https://fakestoreapi.com/';

export default function ({ $axios, redirect }, inject) {
    const api = {
        async getAllProducts() {
            try {
                const data = await $axios.$get(`${baseURL}products`, {
                    params: {
                        limit: 10,
                    },
                });
                return data;
            } catch (e) {
                if (parseInt(e.response && e.response.status) === 404) {
                    redirect('/error');
                    throw e;
                }
            }
        },

        async getOneProduct(slug) {
            try {
                const data = await $axios.$get(`${baseURL}products/${slug}`);
                return data;
            } catch (e) {
                if (parseInt(e.response && e.response.status) === 404) {
                    redirect('/error');
                    throw e;
                }
            }
        },
    };

    inject('api', api);
}
