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
  actions: {
    async getData({ commit }) {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");
        const {
          category
        } = await res.json();
        
        commit('increment', category);
      } catch (error) {
        alert(error.message);
      }
    },
  },
});

export default store;
