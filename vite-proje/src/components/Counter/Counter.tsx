
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement,decreseHundred,increaseHunder,increment } from "../../features/Counter/counterSlice";
import { CounterButton, CounterContainer, CounterResult } from "../styled";



const Counter = () => {
 
    const dispatch= useAppDispatch()
    const count= useAppSelector(state => state.counter.value)

  return (
    <CounterContainer>
              <CounterButton onClick={()=> dispatch(decreseHundred(100))}>-100</CounterButton>

      <CounterButton onClick={() => dispatch(decrement())}>-</CounterButton>
      <CounterResult>{count}</CounterResult>
      <CounterButton onClick={()=> dispatch(increment())}>+</CounterButton>

      <CounterButton onClick={()=> dispatch(increaseHunder(100))}>+100</CounterButton>
      
    </CounterContainer>
  );
};

export default Counter;
