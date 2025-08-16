import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.base_url }),
    tagTypes: ["Books"],

    endpoints: (build) => ({
        getAllBooks: build.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        getBookById: build.query({
            query: (id: string) => `/books/${id}`,
            providesTags: ["Books"],
        }),
        updateBooks: build.mutation({
            query: ({ id, newPost }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: newPost,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBooks: build.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        addBook: build.mutation({
            query: (payload) => ({
                url: "/books",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const {
    useGetAllBooksQuery,
    useUpdateBooksMutation,
    useDeleteBooksMutation,
    useAddBookMutation,
    useGetBookByIdQuery,
} = booksApi;
