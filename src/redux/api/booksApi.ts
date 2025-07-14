import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books",
        }),
        updateBooks: build.mutation({
            query: ({ id, newPost }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: newPost,
            }),
        }),
    }),
});

export const { useGetAllBooksQuery, useUpdateBooksMutation } = booksApi;
