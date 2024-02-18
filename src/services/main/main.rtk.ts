// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://64.226.66.94/api', headers: {
      "Accept": "*/*"
    },
    mode: 'no-cors'
  }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => '/categories',
      // transformResponse: (res: any) => res.data
    }),
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  util: { getRunningQueriesThunk: getUserRunningQueriesThunk, resetApiState: resetMainApiState }
} = mainApi;

export const { getCategories } = mainApi.endpoints;
