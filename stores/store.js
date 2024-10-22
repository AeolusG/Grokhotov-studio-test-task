import { defineStore } from "pinia";
import basket from "@/data/basket.json";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      basket,
      products,
    };
  },
  getters: {
    getBasket(state) {
      return state.basket;
    },
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    addItemToBasket(payload) {},
  },
});
