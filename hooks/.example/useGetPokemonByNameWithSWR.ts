import useSWR from "swr";

/** SWR을 활용한 api 훅스 */

/** fetcher 작성. fetch 말고 axios도 사용가능 */
const fetcher = (args: any) => fetch(args).then((res) => res.json());

/** swr 사용한 hooks 작성 */
export const useGetPokemonByNameWithSWR = (
  name: string
): { pokemon: any; isLoading: boolean; isError: boolean } => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  return { pokemon: data, isLoading: !error && !data, isError: error };
};
