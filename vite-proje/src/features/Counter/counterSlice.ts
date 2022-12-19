import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type Props = {
  value: number;
};
const initialState: Props = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value !== 0 ? (state.value -= 1) : (state.value = 0);
    },
    decreseHundred: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    increaseHunder: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, decreseHundred, increaseHunder } =
  counterSlice.actions;
export default counterSlice.reducer;
