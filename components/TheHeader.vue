<template>
  <header class="header">
    <div class="cart-info">
      Ваша корзина
      <div class="cart-info__count">
        {{ productsCount }}
        {{ declineNoun(productsCount, ["товар", "товара", "товаров"]) }}
      </div>
      {{ productsTotalPrice.toLocaleString("ru-RU") }}₽
    </div>
  </header>
</template>
<script>
import { declineNoun } from "../utils/nounDeclension";

export default {
  props: {
    productsCount: {
      type: Number,
      default: null,
    },
    productsTotalPrice: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/fonts/fonts.css";

.header {
  margin: 30px 75px;
  display: flex;
  justify-content: flex-end;
}
.cart-info {
  background-image: url("/images/Cart.svg");
  background-position-x: left;
  background-repeat: no-repeat;
  background-position-y: center;
  font-family: "Lato Regular", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgb(31, 36, 50);
  padding-left: 40px;
}

.cart-info__count {
  color: rgba(121, 123, 134, 1);
}
</style>
