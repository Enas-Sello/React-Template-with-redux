import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  endpoints: (builder) => ({
    getAll: builder.query({
      query: (arg) => {
        return {
          url: ``,
        }
      },
      providesTags: [""],
    }),
    getAllCategories: builder.query({
      query: () => ``,
      providesTags: [""],
    }),
    getDetail: builder.query({
      query: (id) => {
        return {
          url: ``,
          method: "GET",
        }
      },
      providesTags: [""],
    }),
    add: builder.mutation({
      query: ({ token, body }) => ({
        url: ``,
        method: "POST",
        headers: {
          "x-access-token": `${token}`,
        },
        body,
      }),
      invalidatesTags: [""],
    }),
  }),
})
export const { useGetAllQuery } = Api
