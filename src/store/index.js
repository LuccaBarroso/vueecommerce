import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 0, name: "bottle", price: 20.5 },
      { id: 1, name: "can", price: 5.0 },
      { id: 2, name: "cap", price: 24.1 },
    ],
  },
});
