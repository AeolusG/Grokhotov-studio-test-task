<template>
  <div class="card">
    <img class="card__img" :src="`/images/${item.img}`" />

    <div class="card__content">
      <h3 class="card__content-title">Вытяжное устройство G2H</h3>
      <div class="card__description">
        12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия
      </div>
      <div class="card__article">Артикул: G2H1065</div>
    </div>
    <div>
      <div class="card__btn-group">
        <button
          type="button"
          class="card__btn card__btn--minus"
          @click="removeItemFromCart(item)"
        ></button>
        <div class="card__count">{{ item.totalCount }}</div>
        <button
          type="button"
          class="card__btn card__btn--plus"
          @click="addItemToCart(item)"
        ></button>
        <div class="card__price-per-item" v-show="showPrice">
          {{ item.price.toLocaleString("ru-RU") }} ₽/шт.
        </div>
      </div>
    </div>

    <div class="card__price">
      {{ item.totalPrice.toLocaleString("ru-RU") }} ₽
    </div>

    <button class="card__remove-btn" @click="removePosition(item)"></button>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useProductStore } from "../stores/store";

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions(useProductStore, [
      "addItemToCart",
      "removeItemFromCart",
      "removePosition",
    ]),
  },
  computed: {
    showPrice() {
      return Boolean(this.item.totalCount > 1);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(196, 196, 196, 1);
  padding-bottom: 20px;
  margin-bottom: 20px;

  font-family: "Lato Bold", sans-serif;
}
.card__content {
  width: 300px;
}
.card__btn-group {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.card__count {
  background: rgb(246, 248, 250);

  color: rgb(51, 55, 78);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 8px 12px;
  margin: 5px;
  max-width: 40px;
}
.card__btn {
  border: none;
  padding: 10px;
  height: 34px;
  width: 34px;

  background: rgb(246, 248, 250);
  color: rgb(51, 55, 78);
  font-size: 30px;

  cursor: grab;
}
.card__btn--plus {
  background-image: url("/images/plus.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.card__btn--minus {
  background-image: url("/images/minus.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.card__price-per-item {
  position: absolute;
  top: 40px;

  background-color: white;

  font-size: 12px;
  font-weight: 400;
}
.card__img {
  max-width: 100px;
}
.card__description {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;

  margin-bottom: 20px;
}
.card__content-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
}
.card__price {
  padding: 0 30px;
  max-width: 130px;
  font-size: 18px;
  line-height: 26px;

  overflow: hidden;
  text-overflow: ellipsis;
}
.card__article {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(121, 123, 134, 1);
}
.card__remove-btn {
  background: none;
  border: none;
  background-image: url("/images/close.png");
  background-repeat: no-repeat;

  padding: 12px;
  margin-bottom: auto;

  cursor: pointer;
}
</style>
