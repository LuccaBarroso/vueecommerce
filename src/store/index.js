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
    cart: [{ productID: 1, qnt: 1 }],
  },
  getters: {
    getCartItemQntById: (state) => (id) => {
      const curItem = state.cart.find((item) => item.productID === id);
      if (curItem) return curItem.qnt;
      return 0;
    },
  },
  mutations: {
    addCartItem(state, id) {
      state.cart.push({ productID: id, qnt: 1 });
    },
    deleteCartItem(state, id) {
      state.cart = state.cart.filter((product) => product.productID != id);
    },
    incrementToCartItem(state, id) {
      let cartItem = state.cart.find((item) => item.productID === id);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.qnt++;
      state.cart[itemIndex] = cartItem;
    },
    decrementToCartItem(state, id) {
      let cartItem = state.cart.find((item) => item.productID === id);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.qnt--;
      state.cart[itemIndex] = cartItem;
    },
  },
  actions: {
    addProduct({ commit, getters }, id) {
      if (getters.getCartItemQntById(id) !== 0) {
        commit("incrementToCartItem", id);
      } else {
        commit("addCartItem", id);
      }
    },
    subProduct({ commit, getters }, id) {
      if (getters.getCartItemQntById(id) > 1) {
        commit("decrementToCartItem", id);
      } else {
        commit("deleteCartItem", id);
      }
    },
  },
});
