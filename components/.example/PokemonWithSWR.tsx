import { FC } from "react";
import { useGetPokemonByNameWithSWR } from "../../hooks/.example";

/** SWR 예제 컴포넌트 */
export const PokemonWithSWR: FC = () => {
  const { pokemon, isLoading, isError } =
    useGetPokemonByNameWithSWR("charmander");

  return (
    <div>
      {isError ? (
        <>에러 발생!</>
      ) : isLoading ? (
        <>로딩 중!</>
      ) : pokemon ? (
        <>
          <h3>{pokemon.species.name}</h3>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.species.name} />
        </>
      ) : null}
    </div>
  );
};
