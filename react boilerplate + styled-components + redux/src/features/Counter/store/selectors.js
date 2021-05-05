import { createSelector } from "reselect";

export const getCounterState = (state) => state?.counter;

export const getCounterContainerProps = createSelector(
    [getCounterState],
    (state) => ({
        value: state?.value || 0,
    }),
);
