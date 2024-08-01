import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "alicedev94",
      rol: "admin",
      count: 1,
    };
  },
  getters: {
    firstName(state) {
      return state.username.toLocaleUpperCase();
    },
  },
  mutations: {
    increment(state, username) {
      //mute state
      state.username = username;
    },
  },
});

export default store;
