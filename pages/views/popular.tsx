import * as React from "react";
import { NextPage, NextPageContext } from "next";
import {
  PopularContentBundle,
  PopularMiniContent,
  PopularWideContent,
} from "../../components/main/popular";

interface Props {
  query: { name?: string };
}

const Popular: NextPage<Props> = ({ query }: { query: any }) => {
  return (
    <div>
      <PopularContentBundle></PopularContentBundle>
      <PopularMiniContent></PopularMiniContent>
      <PopularWideContent></PopularWideContent>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  return { props: {} };
}

export default Popular;
