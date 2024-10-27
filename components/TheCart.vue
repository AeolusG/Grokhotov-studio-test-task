<template>
  <div class="cart-wrapper">
    <div class="cart">
      <TheBreadcrumbs />
      <div class="cart__header">
        <div class="cart__wrap">
          <h1 class="title">Ваша корзина</h1>
          <div class="cart__products-count">
            {{ totalCount }}
            {{ declineNoun(totalCount, ["товар", "товара", "товаров"]) }}
          </div>
        </div>
        <button type="button" class="cart__clean-btn" @click="cleanCart">
          Очистить корзину
        </button>
      </div>

      <TheItem v-for="card in cart" :item="card"> </TheItem>

      <div class="cart__installation">
        <input
          type="checkbox"
          id="installation"
          name="installation"
          v-model="isInstallationApproved"
          class="cart__installation-input"
          @input="this.isInstallationApproved = !this.isInstallationApproved"
        />

        <label for="installation" class="cart__installation-label">
          <img
            class="cart__installation-img"
            src="/images/instruments.svg"
            alt="instruments"
          />

          <div class="cart__installation-typography">
            <div>Установка</div>

            <div
              class="cart__installation-typography cart__installation-typography--grey"
            >
              Отметьте, если Вам необходима консультация профессионала по
              монтажу выбранных товаров.
            </div>
          </div>
        </label>
      </div>
    </div>

    <TheTotalPrice
      :is-installation-needed="isInstallationApproved"
      :itemsCount="totalCount"
      :itemsTotalPrice="totalSum"
    ></TheTotalPrice>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useProductStore } from "../stores/store";

import { declineNoun } from "../utils/nounDeclension";

export default {
  data() {
    return {
      isInstallationApproved: false,
      pagination: {
        type: "fraction",
        clickable: true,
        totalClass: "viewed-pagination__pages",
        currentClass: "viewed-pagination__pages--current",
        el: ".viewed-pagination__pages",

        renderFraction: function (currentClass, totalClass) {
          return (
            `<span class="${currentClass}"></span>` +
            '<span class="viewed-pagination__pages--padding">/</span>' +
            `<span class="${totalClass}"></span>`
          );
        },
      },
    };
  },

  methods: {
    ...mapActions(useProductStore, ["cleanCart"]),
  },

  computed: {
    ...mapState(useProductStore, [
      "cart",
      "products",
      "totalSum",
      "totalCount",
    ]),
  },
};
</script>

<style scoped>
:deep(.viewed-pagination__pages--current) {
  font-size: 24px;
  color: #212121;
}
:deep(.viewed-pagination__pages--padding) {
  padding-left: 10px;
  padding-right: 10px;
}

.wrapper {
  width: 1250px;
  margin: auto;
}

.cart__installation {
  display: flex;
  align-items: center;

  border-radius: 5px;
  padding: 25px;
  margin-bottom: 80px;
  padding-left: 65px;

  background-color: rgba(246, 248, 250, 1);
}

.cart__installation-typography {
  font-size: 16px;
  color: rgba(31, 36, 50, 1);
  line-height: 21px;
}

.cart__installation-typography--grey {
  color: rgba(121, 123, 134, 1);
  font-size: 14px;
}

.cart__installation-img {
  align-self: flex-start;
  margin-right: 20px;
  padding: 10px;

  border-radius: 5px;
  background-color: #fff;
}

.cart {
  width: 800px;
}

.cart-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart__installation-input {
  display: none;
}
.cart__installation-label {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.cart__installation-label::before {
  content: "";
  position: absolute;
  padding: 10px;
  margin-right: 20px;

  background-color: #fff;
  border: 1px solid rgba(121, 123, 134, 1);
  border-radius: 2px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.08);
  top: 13px;
  left: -41px;
}

.cart__installation-label::after {
  content: "";
  position: absolute;
  display: none;
  width: 8px;
  height: 8px;
  background-color: #0069b4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 24px;
  left: -30px;
}

.cart__installation-input:checked + label::after {
  display: block;
}

.card__content {
  margin-right: 80px;
}

.card__btn-group {
  margin-right: 80px;
}

.cart__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  margin-bottom: 40px;
}

.cart__products-count {
  font-weight: 400;
  color: #797b86;

  margin-left: 20px;
}

.cart__wrap {
  display: flex;
  align-items: baseline;
}

.cart__clean-btn {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #797b86;
  text-decoration: underline;

  background: none;
  border: none;

  cursor: pointer;

  &:hover {
    color: #c1c2c5;
  }
}

.viewed-cards {
  display: flex;

  margin-bottom: 100px;
  column-gap: 20px;
}

.title {
  color: rgba(31, 36, 50, 1);
  font-size: 44px;
  font-weight: 700;
}
</style>
