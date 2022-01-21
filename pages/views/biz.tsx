import * as React from "react";
import { NextPage, NextPageContext } from "next";
import {
  CommonContentBundle,
  CommonMiniContent,
  CommonWideContent,
} from "../../components/main/common";

interface Props {
  query: { name?: string };
}

const Biz: NextPage<Props> = ({ query }: { query: any }) => {
  return (
    <div>
      <CommonContentBundle></CommonContentBundle>
      <CommonMiniContent></CommonMiniContent>
      <CommonWideContent></CommonWideContent>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const query = {};
  return { props: {} };
}

export default Biz;
