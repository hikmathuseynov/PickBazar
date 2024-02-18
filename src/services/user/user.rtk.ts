// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://64.226.66.94/accounts/api' }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body
      }),
    }),

    // getUserById: builder.query<any, number>({
    //   query: (id) => `User/${id}`,
    //   transformResponse: (res: any) => res.data
    // }),

    // addUser: builder.mutation({
    //   query: (body) => ({
    //     url: "User/register",
    //     method: "POST",
    //     body
    //   }),
    // }),

    // updateUser: builder.mutation<void, any>({
    //   query: ({ userId, ...body }) => ({
    //     url: `User/${userId}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["Users"]
    // }),

    // deleteUser: builder.mutation<void, number | undefined>({
    //   query: (id) => ({
    //     url: `User/${id}`,
    //     method: "DELETE"
    //   }),
    // })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  util: { getRunningQueriesThunk: getUserRunningQueriesThunk, resetApiState: resetUserApiState }
} = userApi;

// export const { getUserById } = userApi.endpoints;
