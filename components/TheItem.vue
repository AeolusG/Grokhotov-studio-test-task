<template>
  <div class="card">
    <img :src="`/images/${image}`" />

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
          class="card__btn-group--minus"
          @click="decreaseItems(itemsCount)"
        ></button>
        <div>{{ itemsCount }}</div>
        <button
          class="card__btn-group--plus"
          @click="increaseItems(itemsCount)"
        ></button>
      </div>

      <div class="card__price-per-item" v-show="showThePrice">
        {{ makeLocaled }} ₽/шт.
      </div>
    </div>

    <div class="card__price">{{ getPrice }}₽</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    partNumber: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    pricePerItem: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      itemsCount: 1,
    };
  },
  methods: {
    increaseItems(count) {
      this.itemsCount++;
      this.$emit("getIncreased", count);
    },
    decreaseItems(count) {
      this.itemsCount = count <= 1 ? count : this.itemsCount - 1;
      this.$emit("getDecreased", count);
    },
  },
  computed: {
    getPrice() {
      let currentPrice = this.price * this.itemsCount;

      return currentPrice.toLocaleString("ru-RU");
    },
    makeLocaled() {
      return this.pricePerItem.toLocaleString("ru-RU");
    },
    showThePrice() {
      return Boolean(this.itemsCount > 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/fonts/fonts.css";

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.card__content {
  width: 300px;
}
.card__btn-group {
  display: flex;
  align-items: center;
  position: relative;

  div {
    background: rgb(246, 248, 250);
    color: rgb(51, 55, 78);
    padding: 8px;
    margin: 5px;
    width: 20px;
    text-align: center;
  }
  button {
    border: none;
    background: rgb(246, 248, 250);
    color: rgb(51, 55, 78);
    font-size: 30px;
    padding: 10px;
    height: 34px;
    width: 34px;
    cursor: grab;
  }
  .card__btn-group--minus {
    background-image: url("/images/minus.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  .card__btn-group--plus {
    background-image: url("/images/plus.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}
.card__price-per-item {
  font-family: "Roboto", serif;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  padding-left: 30px;
}
.card__description {
  font-family: "Lato Regular", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 20px;
}
.card__content-title {
  font-family: "Lato Regular", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
}
.card__price {
  font-family: "Lato Bold", sans-serif;
  font-size: 18px;
  line-height: 26px;
}
.card__article {
  font-family: "Lato Bold", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(121, 123, 134, 1);
}
</style>
