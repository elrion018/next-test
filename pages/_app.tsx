import { FC, useState } from "react";
import type { AppProps /*, AppContext */ } from "next/app";

import { reduxWrapper } from "../store";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

import Sidebar from "../components/sidebar";
import { Header } from "../components/header/Header";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div style={{ display: "flex", maxWidth: 1100 }}>
          <div style={{ flexBasis: "30%", margin: 25 }}>
            <Sidebar />
          </div>
          <Header></Header>
          <div style={{ flexBasis: "70%", margin: 25 }}>
            <Component {...pageProps} />
          </div>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default reduxWrapper.withRedux(MyApp);
// export default MyApp;
