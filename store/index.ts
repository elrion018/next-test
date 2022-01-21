import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { pokemonApi } from "../services/.example/pokemon";
import counterSlice from "./counter/counterSlice";

/**
 * root store 를 생성하고 이를 next에서 사용하기 위해 wrapper HOC를 만든다.
 *
 */

/**
 * root store 생성
 *
 */
const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer, // RTK QUERY 리듀서
    },

    // api를 미들웨어에 추가해주기
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),

    devTools: true,
  });
};

/**
 * 사용할 타입들 설정
 */
export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

/**
 * wrapper HOC
 */
export const reduxWrapper = createWrapper<RootStore>(makeStore, {
  debug: true,
});
