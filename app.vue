<template>
  <div class="wrapper">
    <TheHeader :productsCount="totalCount" :productsTotalPrice="totalSum" />

    <div class="cart-wrapper">
      <div class="cart">
        <ul class="breadcrumbs">
          <li class="breadcrumbs-text">Главная</li>
          <li class="breadcrumbs-text breadcrumbs-text--active">Корзина</li>
        </ul>

        <div class="cart__header">
          <div class="cart__wrap">
            <h1 class="title">Ваша корзина</h1>
            <div class="cart__count">
              {{ totalCount }}
              {{ declineNoun(productsCount, ["товар", "товара", "товаров"]) }}
            </div>
          </div>

          <button
            type="button"
            class="cart__items--clean"
            @click="cleanTheCart"
          >
            Очистить корзину
          </button>
        </div>

        <TheItem v-for="card in cartItems" :item="card"> </TheItem>

        <!-- Сделать чекбокс обернуть в лабел для курсора везде +++++++-->
        <div class="cart___installation">
          <input
            type="checkbox"
            id="installation"
            name="installation"
            v-model="isInstallationApproved"
            :class="changeClass"
            @click="changeInstallationStatus"
          />

          <label for="installation" class="cart__installation-label">
            <img class="cart__installation-img" src="/images/instruments.svg" />

            <div class="cart__installation-typography">
              <div>Установка</div>
              <div class="cart__installation-typography--grey">
                Отметьте, если Вам необходима консультация профессионала по
                монтажу выбранных товаров.
              </div>
            </div>
          </label>
        </div>
      </div>

      <TheTotalPrice
        :installation="isInstallationApproved"
        :itemsCount="totalCount"
        :itemsTotalPrice="totalSum"
      ></TheTotalPrice>
    </div>
    <img src="/images/arrowleft.png" />
    <!-- Пагинация и тайтл два разных бем блока +++++++++++++-->
    <div class="recommended">
      <h2 class="recommended-title">Просмотренные товары</h2>

      <div class="recommended-pagination">
        <button class="recommended-pagination__btns">
          <img src="/images/arrowleft.png" />
        </button>
        <!-- стрелочка свгшка сам элемент кнопка с бордером и фоном ++++++++++++++++===-->
        <div class="recommended-pagination__pages">
          <span class="recommended-pagination__pages--current">1</span>
          <span class="recommended-pagination__pages--padding">/</span>
          6
        </div>
        <button class="recommended-pagination__btns">
          <img src="/images/arrowright.png" />
        </button>
      </div>
    </div>

    <div class="recommended-cards">
      <TheProductCard
        v-for="card in viewedProducts"
        :image="card.img"
        :description="card.description"
        :part-number="card.partNumber"
        :price="card.price"
        :price-in-euro="card.priceInEuro"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useProductStore } from "./stores/store";

import { declineNoun } from "./utils/nounDeclension";

export default {
  data() {
    return {
      isInstallationApproved: false,
    };
  },
  methods: {
    ...mapActions(useProductStore, ["cleanTheCart"]),

    changeInstallationStatus() {
      this.isInstallationApproved = !this.isInstallationApproved;
    },
  },
  computed: {
    ...mapState(useProductStore, [
      "cartItems",
      "viewedProducts",
      "totalSum",
      "totalCount",
    ]),

    changeClass() {
      return this.isInstallationApproved
        ? "cart__installation-btn--active"
        : "cart__installation-btn";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/fonts/fonts.css";

.wrapper {
  width: 1200px;
  margin: auto;
}
.cart___installation {
  display: flex;
  background-color: rgba(246, 248, 250, 1);
  border-radius: 5px;
  padding: 25px;
  align-items: center;
  margin-bottom: 80px;
  cursor: pointer;
  .cart__installation-typography {
    font-size: 16px;
    color: rgba(31, 36, 50, 1);
    line-height: 21px;
    cursor: pointer;
  }
  .cart__installation-typography--grey {
    color: rgba(121, 123, 134, 1);
    font-size: 14px;
  }
}
.cart__installation-btn {
  padding: 10px;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid rgba(121, 123, 134, 1);
  border-radius: 2px;
  cursor: pointer;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.08);
}
.cart__installation-btn:hover {
  background-color: rgb(14, 124, 202);
  border: 1px solid rgb(14, 124, 202);
}
.cart__installation-btn--active {
  background-color: rgb(14, 124, 202);
  border: 1px solid rgb(14, 124, 202);

  padding: 10px;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.08);
}
.cart__installation-img {
  margin-right: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
}
.cart {
  margin-right: 50px;
}
.cart-wrapper {
  font-family: "Lato Regular", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
}
.cart__installation-label {
  display: flex;
}
.breadcrumbs {
  font-family: "Lato Regular", sans-serif;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  margin-bottom: 40px;
  line-height: 20px;
  img {
    margin-right: 10px;
    margin-left: 10px;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
}

.breadcrumbs-text {
  margin-right: 20px;
  position: relative;
}
.breadcrumbs-text::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-left: 4px solid #555;
  border-bottom: 4px solid transparent;
  position: absolute;
  transform: translate(10px, 7px);
}
.breadcrumbs-text:last-child::after {
  display: none;
}
.breadcrumbs-text--active {
  color: rgba(121, 123, 134, 1);
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
  font-family: "Lato Regular", sans-serif;
  margin-bottom: 40px;
}
.cart__count {
  font-weight: 400;
  color: #797b86;
  margin-left: 20px;
}
.cart__wrap {
  display: flex;
  align-items: baseline;
}

.cart__items--count-typography {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(121, 123, 134, 1);
}
.cart__items--clean {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgb(121, 123, 134);
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
}
.recommended {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recommended-title {
  font-family: "Lato Regular", sans-serif;
  font-size: 30px;
  color: rgba(31, 36, 50, 1);
  margin-bottom: 70px;
}
.recommended-pagination {
  margin: 0;
  display: flex;
  align-items: center;
  font-family: "Lato Regular", sans-serif;
  font-size: 20px;
  color: #797b86;
}
.recommended-pagination__pages {
  padding: 0 20px;
}
.recommended-pagination__pages--current {
  font-size: 24px;
  color: #212121;
}
.recommended-pagination__pages--padding {
  padding-left: 10px;
  padding-right: 10px;
}
.recommended-pagination__btns {
  background-color: #90a2b5;
  border-radius: 50%;
  border: none;
  padding: 16px 22px;
}

.recommended-cards {
  display: flex;
  margin-bottom: 100px;
  column-gap: 20px;
}
.title {
  color: rgba(31, 36, 50, 1);
  font-family: "Lato Regular", sans-serif;
  font-size: 44px;
  font-weight: 700;
}
@media screen and (max-width: 992px) {
  .wrapper {
    min-width: 768;
    max-width: 1199px;
    margin: 0 20px;
  }
  .cart-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
<!-- 
1200px
992px
768px
480px
320px -->
