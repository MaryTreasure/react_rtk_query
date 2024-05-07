import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface IGoods {
    id: number,
    name: string
}

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3004/'}),
    endpoints: (builder) => ({
        getGoods: builder.query<IGoods, string>({
            query: () => `goods`
        })
    })
});

export const { useGetGoodsQuery } = goodsApi;