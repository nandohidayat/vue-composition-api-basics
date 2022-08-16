import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "My Counter App",
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});
