import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    name: "Counter initial",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.name = "Counter Increment";
    },
    decrement: (state) => {
      state.value -= 1;
      state.name = "Counter Decrement";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.counter;
      state.name = action.payload.name;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
