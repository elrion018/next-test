import { FC } from "react";
import { useGetPokemonByNameWithRQ } from "../../hooks/.example";

export const PokemonWithRQ: FC = () => {
  const { data, isError, isLoading } = useGetPokemonByNameWithRQ("bulbasaur");

  return (
    <div>
      {isError ? (
        <>에러 발생!</>
      ) : isLoading ? (
        <>로딩 중!</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : (
        "hi"
      )}
    </div>
  );
};
