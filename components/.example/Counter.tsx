import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/counter/counterSlice";

/** RTK 예제 컴포넌트 */
export const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(4))}>
          increment by 4
        </button>
      </div>
    </div>
  );
};
