<template>
  <div class="subtotal">
    <div class="subtotal__title">Итого</div>
    <div class="subtotal__info">
      <div>Сумма заказа</div>
      <div>{{ makeLocaled }} ₽</div>
    </div>
    <div class="subtotal__info">
      <div>Количество</div>
      <div>{{ itemsCount }} шт</div>
    </div>
    <div class="subtotal__info subtotal__info--border">
      <div>Установка</div>
      <div>{{ isInstallationNeeded ? "да" : "нет" }}</div>
    </div>
    <div class="subtotal__info">
      <div class="subtotal__info--typography">Стоимость товаров</div>
      <div class="subtotal__info--typography-bold">
        {{ itemsTotalPrice.toLocaleString("ru-RU") }} ₽
      </div>
    </div>
    <div class="subtotal__btn-group">
      <button type="button" @click="completePurchase" class="subtotal__btn">
        Оформить заказ
      </button>
      <button type="button" @click="completePurchase" class="subtotal__btn">
        Купить в 1 клик
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useProductStore } from "../stores/store";

import Status from "../utils/alertStatus";

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
    isInstallationNeeded: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    ...mapActions(useProductStore, ["submitPurchase", "showAlert"]),

    async completePurchase() {
      try {
        await this.submitPurchase();

        this.showAlert({
          isShown: true,
          status: Status.SUCCESS,
          text: "Заказ оформлен",
        });
      } catch (error) {
        this.showAlert({
          isShown: true,
          status: Status.ERROR,
          text: error.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.subtotal {
  width: 370px;
  padding: 35px;

  background-color: rgb(246, 248, 250);
  border-radius: 5px;
}
.subtotal__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
}
.subtotal__info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin-bottom: 20px;
}
.subtotal__info--typography {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}
.subtotal__info--typography-bold {
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
}
.subtotal__info--border {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(174, 176, 182, 1);
}
.subtotal__btn-group {
  display: flex;
  flex-direction: column;
}
.subtotal__btn {
  margin-bottom: 10px;

  cursor: pointer;
}
.subtotal__btn:nth-child(1) {
  background-color: rgba(0, 105, 180, 1);
  color: #fff;

  border-radius: 4px;
  border: none;
  padding: 14px 40px;

  font-size: 18px;
  font-weight: 600;
}
.subtotal__btn:nth-child(1):hover {
  background-color: rgb(14, 124, 202);
  transition: 0.2s ease;
}
.subtotal__btn:nth-child(2) {
  color: rgba(0, 105, 180, 1);
  background-color: #fff;

  border-radius: 4px;
  border: 1px solid rgba(0, 105, 180, 1);
  padding: 14px 40px;

  font-size: 18px;
  font-weight: 600;
}
.subtotal__btn:nth-child(2):hover {
  color: rgb(57, 157, 228);
  transition: 0.2s ease;
}
</style>
