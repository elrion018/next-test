import { useQuery } from "react-query";

export const getPokemonByName = (name: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`).then((res) => {
    res.json();
  });

export const useGetPokemonByNameWithRQ = (
  name: string
): {
  data: any;
  isError: boolean;
  isLoading: boolean;
} => {
  const { data, isError, isLoading } = useQuery(
    "pokemon-fetched-react-query",
    getPokemonByName.bind(null, name)
  );

  return { data, isError, isLoading };
};
