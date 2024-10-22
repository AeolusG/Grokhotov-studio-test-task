<template>
  <header class="header">
    <img class="header__image" src="/images/Vector.svg" alt="basket" />
    <div>
      <div class="header__content--description">Ваша корзина</div>
      <div class="header__content--items-count">
        {{ itemsCount }} {{ getNoun }}
      </div>
      <div class="header__content--total-price">{{ makeLocaled }}₽</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    itemsCount: {
      type: Number,
      default: null,
    },
    itemsTotalPrice: {
      type: Number,
      default: null,
    },
  },
  computed: {
    getNoun() {
      let n = Math.abs(this.itemsCount);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return "товаров";
      }
      n %= 10;
      if (n === 1) {
        return "товар";
      }
      if (n >= 2 && n <= 4) {
        return "товара";
      }
      return "товаров";
    },
    makeLocaled() {
      return this.itemsTotalPrice.toLocaleString("ru-RU");
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
.header__content--description {
  font-family: "Lato Regular", sans-serif;
  font-size: 14px;
}
.header__content--items-count {
  color: rgba(121, 123, 134, 1);
  font-family: "Lato Regular", sans-serif;
  font-size: 12px;
  line-height: 17px;
}
.header__image {
  margin-right: 15px;
}
.header__content--total-price {
  font-family: "Lato Regular", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(31, 36, 50, 1);
}
</style>
