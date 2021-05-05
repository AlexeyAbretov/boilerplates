import { createSymbiote } from 'redux-symbiote';

import { initialState } from "./initialState";

const symbiotes = {
  increment: (state) =>  ({
    ...state,
    value: state.value + 1,
  }),
  decrement:(state) =>  ({
    ...state,
    value: state.value - 1,
  }),
};

export const {
  actions,
  reducer,
} = createSymbiote(
  initialState,
  symbiotes,
  'counter',
);