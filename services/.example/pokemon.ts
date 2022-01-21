/** RTK Query 적용 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/** API 생성 */
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

/** 자동 생성된 hooks 를 export */
export const { useGetPokemonByNameQuery } = pokemonApi;
