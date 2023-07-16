import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dashboard-backend-ansu.onrender.com" }),
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "/client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "/client/customers",
      providesTags: ["Customers"],
    }),
    getTransctions: build.query({
      query: ({ page, pageSize, search, sort }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, search, sort },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "/client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "/sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "/management/admin",
      providesTags: ["Admins"],
    }),
   
    getDashboard: build.query({
      query: () => "/general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransctionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetDashboardQuery,
  
} = api;
