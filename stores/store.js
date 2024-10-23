import { defineStore } from "pinia";
import cart from "@/data/basket.json";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      cart,
      products,
    };
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    viewedProducts(state) {
      return state.products;
    },
    totalSum(state) {
      let i = 0;
      return state.cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.totalCount;
      }, i);
    },
    totalCount(state) {
      let i = 0;
      return state.cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.totalCount;
      }, i);
    },
  },
  actions: {
    addItemToCart(item) {
      item.totalCount++;
      item.totalPrice = item.price * item.totalCount;
    },
    removeItemFromCart(item) {
      item.totalCount =
        item.totalCount <= 1 ? item.totalCount : item.totalCount - 1;
      item.totalPrice = item.price * item.totalCount;
    },
    cleanTheCart() {
      console.log(this.cart);
      this.cart = [];
    },
    removePosition(position) {
      this.cart = this.cart.filter((item) => item.cardId !== position.cardId);
    },
  },
});
