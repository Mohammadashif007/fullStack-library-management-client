import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
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
