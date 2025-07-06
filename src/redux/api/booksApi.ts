import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books",
        }),
        borrowBook: build.mutation({
            query: (borrow) => ({
                url: "/borrow",
                method: "POST",
                body: borrow,
            }),
        }),
    }),
});

export const { useGetAllBooksQuery, useBorrowBookMutation } = booksApi;
