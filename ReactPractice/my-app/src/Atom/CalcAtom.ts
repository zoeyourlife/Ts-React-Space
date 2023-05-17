import { atom, selector } from "recoil";

export const firstNumState = atom<number>({
  key: "firstNum",
  default: 0,
});

export const secondNumState = atom<number>({
  key: "secondNum",
  default: 0,
});

export const resultSelector = selector({
  key: "result",
  get: ({ get }) => {
    const num1 = get(firstNumState);
    const num2 = get(secondNumState);
    return {
      sum: num1 + num2,
      multi: num1 * num2,
    };
  },
});
