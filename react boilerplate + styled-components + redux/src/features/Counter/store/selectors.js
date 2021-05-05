import { createSelector } from "reselect";

export const getCounterState = (state) => state?.counter;

export const CounterContainerProps = createSelector(
    [getCounterState],
    (state) => ({
        value: state?.value || 0,
    }),
);
