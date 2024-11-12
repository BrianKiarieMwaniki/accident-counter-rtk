import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('INCREMENT', (amount: number) => {
  return { payload: amount };
});
export const decrement = createAction('DECREMENT', (amount: number) => {
  return { payload: amount };
});

export const reset = createAction('RESET');

export const counterReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  });

  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  });

  builder.addCase(reset, (state) => {
    state.count = 0;
  });
});
