import * as React from "react";
import { NextPage, NextPageContext } from "next";
import { dehydrate, QueryClient } from "react-query";
import {
  FeedLineChart,
  FeedMekkoChart,
  FeedDiscussion,
  FeedUpsurgeIndicator,
  FeedInvestNote,
  FeedNewsBundle,
  FeedNewsRanking,
  FeedMiniNews,
  FeedWideNews,
} from "../../components/main/feed";
import {
  Counter,
  PokemonWithRTKQ,
  PokemonWithSWR,
  PokemonWithRQ,
} from "../../components/.example";
import { getPokemonByName } from "../../hooks/.example/useGetPokemonByNameWithRQ";

interface Props {
  query: { name?: string };
}

const Feed: NextPage<Props> = ({ query }: { query: any }) => {
  return (
    <div>
      <Counter></Counter>
      <PokemonWithRTKQ></PokemonWithRTKQ>
      <PokemonWithSWR></PokemonWithSWR>
      <PokemonWithRQ></PokemonWithRQ>
      <FeedLineChart></FeedLineChart>
      <FeedMekkoChart></FeedMekkoChart>
      <FeedDiscussion></FeedDiscussion>
      <FeedUpsurgeIndicator></FeedUpsurgeIndicator>
      <FeedInvestNote></FeedInvestNote>
      <FeedNewsBundle></FeedNewsBundle>
      <FeedNewsRanking></FeedNewsRanking>
      <FeedMiniNews></FeedMiniNews>
      <FeedWideNews></FeedWideNews>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "pokemon-fetched-react-query",
    getPokemonByName.bind(null, "pikachu")
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default Feed;
