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
    logInRes: "",
    updateRes: "",
    jwt: "",
    curHover: "",
    error: ""
  },
  getters: {
    getCartItemQntByName: state => name => {
      const curItem = state.cart.find(item => item.name === name);
      if (curItem) return curItem.quantity;
      return 0;
    },
    getProductInfoByName: state => name => {
      return state.products.find(product => product.name === name);
    },
    getProducts: state => {
      return state.products;
    },
    getCartTotal: (state, getters) => {
      return state.cart.reduce(function(acc, product) {
        return (
          acc +
          product.quantity * getters.getProductInfoByName(product.name).price
        );
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
    getUpdateRes: state => {
      return state.updateRes;
    },
    isLogged: state => {
      for (const property in state.user) {
        return true;
      }
      return false;
    },
    getUser: state => {
      if (state.user) {
        return state.user;
      }
      return null;
    },
    getJwt: state => {
      return state.jwt;
    },
    getCurHover: state => {
      return state.curHover;
    },
    getError: state => {
      return state.error;
    }
  },
  mutations: {
    addCartItem(state, name) {
      state.cart.push({ name: name, quantity: 1 });
    },
    deleteCartItem(state, name) {
      state.cart = state.cart.filter(product => product.name != name);
    },
    incrementToCartItem(state, name) {
      let cartItem = state.cart.find(item => item.name === name);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.quantity++;
      state.cart[itemIndex] = cartItem;
    },
    decrementToCartItem(state, name) {
      let cartItem = state.cart.find(item => item.name === name);
      let itemIndex = state.cart.indexOf(cartItem);
      cartItem.quantity--;
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
    emptyCart(state) {
      state.cart = [];
    },
    setPopup(state, pop) {
      state.popup = pop;
    },
    setlogInRes(state, logInRes) {
      state.logInRes = logInRes;
    },
    setUpdateRes(state, updateRes) {
      state.updateRes = updateRes;
    },
    setUser(state, user) {
      state.user = user;
    },
    setJwt(state, jwt) {
      state.jwt = jwt;
    },
    setCurHover(state, curHover) {
      state.curHover = curHover;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    addProduct({ commit, getters }, name) {
      if (getters.getCartItemQntByName(name) !== 0) {
        commit("incrementToCartItem", name);
      } else {
        commit("addCartItem", name);
      }
    },
    subProduct({ commit, getters }, name) {
      if (getters.getCartItemQntByName(name) > 1) {
        commit("decrementToCartItem", name);
      } else {
        commit("deleteCartItem", name);
      }
    },
    fetchProducts({ commit }) {
      api.getProducts().then(products => {
        commit("setProducts", products);
      });
    },
    login({ commit }, data) {
      api.login(data).then(res => {
        if (res.data && res.data.user) {
          commit("setUser", res.data.user);
          console.log("login success");
          commit("setlogInRes", "");
          commit("setJwt", res.token);
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
        if (res.data && res.data.user) {
          commit("setUser", res.data.user);
          console.log("register success");
          commit("setJwt", res.token);
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
    },
    updateMe({ commit, getters, dispatch }, data) {
      api.updateMe(data, getters.getJwt).then(async res => {
        if (res.status == "success") {
          await dispatch("getMe");
          commit("setUpdateRes", "");
          commit("setPopup", "Success");
        } else {
          commit("setUpdateRes", res.message);
        }
      });
    },
    getMe({ commit, getters }) {
      api.getMe(getters.getJwt).then(res => {
        commit("setUser", res.data.data);
      });
    },
    updatePass({ commit, getters }, data) {
      api.updatePass(data, getters.getJwt).then(res => {
        if (res.status == "success") {
          commit("setUpdateRes", "");
          commit("setPopup", "Success");
        } else {
          commit("setUpdateRes", res.message);
        }
      });
    },
    logout({ commit, getters }) {
      api.logout(getters.getJwt).then(res => {
        if (res) {
          commit("setPopup", "");
          commit("setUser", null);
          commit("setJwt", null);
          commit("setUpdateRes", "");
        }
      });
    },
    makeOrder({ commit, getters, dispatch }, data) {
      api.makeOrder(getters.getJwt, data.address, data.cart).then(res => {
        if (res.status == "success") {
          commit("emptyCart");
          dispatch("goToOrders");
        } else {
          commit("setError", res.message);
          commit("setPopup", "erro");
        }
      });
    }
  }
});
