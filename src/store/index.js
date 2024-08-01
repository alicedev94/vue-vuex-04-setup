import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "alicedev94",
      rol: "admin",
    };
  },
  getters: {
    firstName (state) {
      return state.username.toLocaleUpperCase()
    }
  }
});

export default store;
