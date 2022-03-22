import Vue from "vue";
import Vuex from "vuex";
import * as api from "../utils/ApiCalls.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    popup: "",
    user: {},
    logInRes: ""
  },
  getters: {
    getCartItemQntById: state => id => {
      const curItem = state.cart.find(item => item.id === id);
      if (curItem) return curItem.qnt;
      return 0;
    },
    getProductInfoById: state => id => {
      return state.products.find(product => product.id === id);
    },
    getProducts: state => {
      return state.products;
    },
    getCartTotal: (state, getters) => {
      return state.cart.reduce(function(acc, product) {
        return acc + product.qnt * getters.getProductInfoById(product.id).price;
      }, 0);
    },
    isCartEmpty: state => {
      return state.cart.length == 0;
    },
    getCurPopup: state => {
      return state.popup;
    },
    getlogInRes: state => {
      return state.logInRes;
    },
    isLogged: state => {
      for (const property in state.user) {
        return true;
      }
      return false;
    }
  },
  mutations: {
    addCartItem(state, id) {
      state.cart.push({ id: id, qnt: 1 });
    },
    deleteCartItem(state, id) {
      state.cart = state.cart.filter(product => product.id != id);
    },
    incrementToCartItem(state, id) {
      let cartItem = state.cart.find(item => item.id === id);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.qnt++;
      state.cart[itemIndex] = cartItem;
    },
    decrementToCartItem(state, id) {
      let cartItem = state.cart.find(item => item.id === id);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.qnt--;
      state.cart[itemIndex] = cartItem;
    },
    setProducts(state, products) {
      let cnt = 0;
      state.products = products.map(item => {
        delete item._id;
        item.id = cnt;
        cnt++;
        return item;
      });
    },
    setPopup(state, pop) {
      state.popup = pop;
    },
    setlogInRes(state, logInRes) {
      state.logInRes = logInRes;
    },
    setUser(state, user) {
      state.user = user;
    }
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
    fetchProducts({ commit }) {
      api.getProducts().then(products => {
        commit("setProducts", products);
      });
    },
    login({ commit }, data) {
      api.login(data).then(res => {
        console.log(res);
        if (res.data && res.data.user) {
          commit("setUser", res.data.user);
          console.log("login success");
          commit("setlogInRes", "");
          commit("setPopup", "Success");
        } else {
          if (res.message) {
            commit("setlogInRes", res.message);
          } else {
            commit("setlogInRes", "Sorry! Something went wrong!");
          }
        }
      });
    },
    register({ commit }, data) {
      api.register(data).then(res => {
        console.log(res);
        if (res.data && res.data.user) {
          commit("setUser", res.data.user);
          console.log("register success");
          commit("setlogInRes", "");
          commit("setPopup", "Success");
        } else {
          console.log(res.message);
          commit("setlogInRes", res.message);
        }
      });
    },
    // register({ commit }, data) {
    //   api.register(data);
    // },
    // eslint-disable-next-line no-unused-vars
    scrollToId({ commit }, id) {
      var element = document.getElementById("cart");
      element.scrollIntoView();
    }
  }
});
