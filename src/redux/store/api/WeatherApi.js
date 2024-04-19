import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://open-weather13.p.rapidapi.com";

const headers = {
    'X-RapidAPI-Key': '15aa424f80msh8aa829aba250145p11666cjsn052ed6c93c25',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }

  const request = (url) => ({
    url,
    headers: headers
  })

  export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCurrentWeatherData: builder.query({
        query: (q) => request(`/city/Cairo/EN?${q}`),
        
      }),
    }),
  });

  export const { useGetCurrentWeatherDataQuery } = weatherApi;
