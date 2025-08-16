import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.base_url }),
    tagTypes: ["Borrow", "Books"],
    endpoints: (build) => ({
        getAllBorrows: build.query({
            query: () => "/borrow",
            providesTags: ["Borrow"],
        }),
        addBorrow: build.mutation({
            query: (payload) => ({
                url: "/borrow",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Borrow", "Books"],
        }),
    }),
});

export const { useGetAllBorrowsQuery, useAddBorrowMutation } = borrowApi;
