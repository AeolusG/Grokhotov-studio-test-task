<template>
  <div class="subtotal-wrapper">
    <div class="subtotal-wrapper-title">Итого</div>
    <div class="subtotal-wrapper__info">
      <div>Сумма заказа</div>
      <div>{{ makeLocaled }} ₽</div>
    </div>
    <div class="subtotal-wrapper__info">
      <div>Количество</div>
      <div>{{ itemsCount }} шт</div>
    </div>
    <div class="subtotal-wrapper__info subtotal-wrapper__info--border">
      <div>Установка</div>
      <div>{{ setInstallation }}</div>
    </div>
    <div class="subtotal-wrapper__info">
      <div class="subtotal-wrapper__info--typography">Стоимость товаров</div>
      <div class="subtotal-wrapper__info--typography-bold">
        {{ makeLocaled }} ₽
      </div>
    </div>
    <div class="subtotal-wrapper__btn-group">
      <button class="subtotal-wrapper__btn">Оформить заказ</button>
      <button class="subtotal-wrapper__btn">Купить в 1 клик</button>
    </div>
  </div>
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
    installation: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setInstallation() {
      return this.installation ? 'да' : 'нет';
    },
    makeLocaled() {
      return this.itemsTotalPrice.toLocaleString('ru-RU');
    },
  },
};
</script>

<style lang="scss" scoped>
.subtotal-wrapper {
  font-family: 'Lato Regular', sans-serif;
  width: 370px;
  background-color: rgb(246, 248, 250);
  padding: 35px;
  border-radius: 5px;
}
.subtotal-wrapper-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
}
.subtotal-wrapper__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: baseline;
}
.subtotal-wrapper__info--typography {
  font-family: 'Lato Regular', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}
.subtotal-wrapper__info--typography-bold {
  font-family: 'Lato Regular', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
}
.subtotal-wrapper__info--border {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(174, 176, 182, 1);
}
.subtotal-wrapper__btn-group {
  display: flex;
  flex-direction: column;
}
.subtotal-wrapper__btn {
  margin-bottom: 10px;

  cursor: pointer;
}
.subtotal-wrapper__btn:nth-child(1) {
  background-color: rgba(0, 105, 180, 1);
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 14px 40px;

  font-family: 'Lato Regular', sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.subtotal-wrapper__btn:nth-child(1):hover {
  background-color: rgb(14, 124, 202);
  transition: 0.2s ease;
}
.subtotal-wrapper__btn:nth-child(2) {
  color: rgba(0, 105, 180, 1);
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 105, 180, 1);
  padding: 14px 40px;

  font-family: 'Lato Regular', sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.subtotal-wrapper__btn:nth-child(2):hover {
  color: rgb(57, 157, 228);
  transition: 0.2s ease;
}
</style>
