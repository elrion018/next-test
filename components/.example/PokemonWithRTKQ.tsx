import { FC } from "react";
import { useGetPokemonByNameQuery } from "../../services/.example/pokemon";

/** RTK QUERY 예제 컴포넌트 */
export const PokemonWithRTKQ: FC = () => {
  // hook을 사용하면 자동적으로 data를 fetch
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");

  return (
    <div>
      {error ? (
        <>에러 발생!</>
      ) : isLoading ? (
        <>로딩 중!</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
