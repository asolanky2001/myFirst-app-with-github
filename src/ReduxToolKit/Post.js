import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eCommerceApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url:'products',
                method:'GET'
            }),
        }),
       loginUser : builder.mutation({
            query: (user) => ({
                url: 'auth/login',
                method: 'POST',
                body: user
            })
        }),
        getProductById : builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: 'POST'
            })
        }),
        addProductsToCart : builder.mutation({
            query: (product) => ({
                url: 'carts/add',
                method: 'POST',
                body: product
            })
        })
    }),
});

export const { useGetAllProductsQuery, useLoginUserMutation, useGetProductsByIdQuery, useAddToCartMutation } = eCommerceApi;

// export default postApi;