import { defineStore } from "pinia";
import cart from "@/data/basket.json";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      cart,
      products,
      alert: {
        isShown: false,
        status: null,
        text: null,
      },
    };
  },
  getters: {
    totalSum(state) {
      return state.cart.reduce(function (acc, currentProductInCart) {
        return (
          acc + currentProductInCart.price * currentProductInCart.totalCount
        );
      }, 0);
    },

    totalCount(state) {
      return state.cart.reduce(function (acc, currentProductInCart) {
        return acc + currentProductInCart.totalCount;
      }, 0);
    },
  },

  actions: {
    addItemToCart(product) {
      product.totalCount += 1;
      product.totalPrice = product.price * product.totalCount;
    },

    removeItemFromCart(product) {
      product.totalCount -= 1;

      if (product.totalCount === 0) {
        this.cart = this.cart.filter((item) => item.cardId !== product.cardId);
      } else {
        product.totalPrice = product.price * product.totalCount;
      }
    },

    cleanCart() {
      this.cart = [];
    },

    removePosition(product) {
      this.cart = this.cart.filter((item) => item.cardId !== product.cardId);
    },

    async submitPurchase() {
      await $fetch("/api/submit", {
        method: "post",
        body: this.cart,
      });
    },

    showAlert(payload) {
      this.alert = payload;
    },

    closeAlert() {
      this.alert = {
        isShown: false,
        status: null,
        text: null,
      };
    },
  },
});
