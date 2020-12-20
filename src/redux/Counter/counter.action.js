import { DECREMENT, INCREMENT } from "./counter.types";

export const increaseCounter = () => ({
  type: INCREMENT,
});

export const decreaseCounter = () => ({
  type: DECREMENT,
});
