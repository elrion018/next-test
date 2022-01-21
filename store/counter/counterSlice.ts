import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** initialState 선언 */
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/** counter 라는 slice 선언 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // state 객체의 value 라는 property를 직접적으로 mutating 하고 있으나
    // 이는 실제로 mutating하는 게 아니라 내부적으로 Immer library를 사용하여
    // 불변성을 유지하고 있음.
    // 간접적 mutation
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action.type, "type");
      state.value += action.payload;
    },
  },
});

/** createSlice를 사용하면 reducers에 해당하는 action creator가 생성된다. */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/** reducer도 있음 */
export default counterSlice;
