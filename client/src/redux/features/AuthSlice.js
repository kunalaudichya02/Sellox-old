import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthSlice = createApi({
  reducerPath: "AuthSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getDetails: builder.query({
      query: ({ email, password }) => ({
        url: "user/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = AuthSlice;
