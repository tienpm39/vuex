import { createStore } from "vuex";
import cart from "./modules/cart";
import product from "./modules/product";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions:{},
  modules: {
    cart,
    product
  },
});
