<template>
  <div class="wrapper">
    <TheHeader :itemsCount="getTotalCount" :itemsTotalPrice="getTotalSum" />
    <div class="wrapper__content">
      <div class="wrapper__basket-contnet">
        <div class="wrapper__basket-header">
          <div class="wrapper__breadcrumbs">
            <div class="wrapper__breadcrumbs-text">Главная</div>
            <img src="/images/arrow.svg" />
            <div
              class="wrapper__breadcrumbs-text wrapper__breadcrumbs-text--active"
            >
              Корзина
            </div>
          </div>
          <div class="title">
            <div class="title__items--flex">
              <h1 class="title__items---header-typography">Ваша корзина</h1>
              <div class="title__items--count-typography">
                {{ getTotalCount }} {{ getNoun }}
              </div>
            </div>

            <div class="title__items--clean-typography">Очистить корзину</div>
          </div>
        </div>

        <!-- PINIAUSAGE -->

        <TheItem
          v-for="card in getBasketFromStore"
          :price="card.totalPrice"
          :pricePerItem="card.price"
          :image="card.img"
          @get-increased="getIncreasedCount, getTotalPerCardByIncrease(card)"
          @get-decreased="getDecreasedCount, getTotalPerCardByDecrease(card)"
        >
        </TheItem>
        <div class="wrapper__item-installation">
          <button
            @click="changeInstallationStatus"
            :class="changeClass"
          ></button>
          <img
            class="wrapper__installation-img"
            src="/images/instruments.svg"
          />
          <div class="wrapper__installation-typography">
            <div>Установка</div>
            <div class="wrapper__installation-typography--grey">
              Отметьте, если Вам необходима консультация профессионала по
              монтажу выбранных товаров.
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__total">
        <TheSubtotal
          :installation="isInstallationApproved"
          :itemsCount="getTotalCount"
          :itemsTotalPrice="getTotalSum"
        ></TheSubtotal>
      </div>
    </div>
    <div class="products-header">
      <h2 class="products-header__title">Просмотренные товары</h2>
      <div class="products-header__title--pages">
        <img src="/images/arrowleft.svg" />
        <div class="products-header__title--pages">
          1 <span class="products-header__title--pages-at-all">/</span>
          <span class="products-header__title--pages-at-all">6</span>
        </div>
        <img src="/images/arrowright.svg" />
      </div>
    </div>
    <div class="products-cards">
      <!-- PiniaUsage -->

      <TheProductCard
        v-for="card in getProductsFromStore"
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
import { useProductStore } from "./stores/store";
export default {
  data() {
    return {
      itemsTotal: 1,
      total: 1,
      isInstallationApproved: false,
      basket: null,
      products: null,
      card: [
        {
          cardId: 1,
          price: 12644,
          totalCount: 1,
          totalPrice: 12644,
          img: "hood1.png",
        },
        {
          cardId: 2,
          price: 12644,
          totalCount: 1,
          totalPrice: 12644,
          img: "hood2.png",
        },
        {
          cardId: 3,
          price: 12644,
          totalCount: 1,
          totalPrice: 12644,
          img: "hood3.png",
        },
      ],
    };
  },
  methods: {
    getIncreasedCount(items) {
      this.itemsTotal = items + 1;
    },
    getDecreasedCount(items) {
      this.itemsTotal = items - 1;
    },
    getTotalPerCardByIncrease(card) {
      card.totalCount++;
    },
    getTotalPerCardByDecrease(card) {
      card.totalCount =
        card.totalCount <= 1 ? card.totalCount : card.totalCount - 1;
    },
    changeInstallationStatus() {
      this.isInstallationApproved = !this.isInstallationApproved;
    },
  },
  computed: {
    getProductsFromStore() {
      const store = useProductStore();
      this.products = store.products;
      return store.products;
    },
    getBasketFromStore() {
      const store = useProductStore();
      this.basket = store.basket;
      return store.basket;
    },
    getTotalSum() {
      let i = 0;
      return this.card.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.totalCount;
      }, i);
    },
    getTotalCount() {
      let i = 0;
      return this.card.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.totalCount;
      }, i);
    },
    getNoun() {
      let n = Math.abs(this.getTotalCount);
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
    changeClass() {
      return this.isInstallationApproved
        ? "wrapper__installation-btn--active"
        : "wrapper__installation-btn";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/fonts/fonts.css";

.wrapper {
  max-width: min-content;
  margin: auto;
  .wrapper__item-installation {
    display: flex;
    background-color: rgba(246, 248, 250, 1);
    border-radius: 5px;
    padding: 25px;
    align-items: center;
    margin-bottom: 80px;
    .wrapper__installation-typography {
      font-family: "Lato Regular", sans-serif;
      font-size: 16px;
      color: rgba(31, 36, 50, 1);
      line-height: 21px;
    }
    .wrapper__installation-typography--grey {
      color: rgba(121, 123, 134, 1);
      font-size: 14px;
    }
  }
  .wrapper__installation-btn {
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
  .wrapper__installation-btn:hover {
    background-color: rgb(14, 124, 202);
    border: 1px solid rgb(14, 124, 202);
  }
  .wrapper__installation-btn--active {
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
  .wrapper__installation-img {
    margin-right: 20px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
  .wrapper__basket-contnet {
    margin-right: 50px;
  }
}
.wrapper__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper__breadcrumbs {
  font-family: "Lato Regular", sans-serif;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  margin-bottom: 40px;
  line-height: 20px;
  img {
    margin-right: 10px;
  }
}
.wrapper__breadcrumbs-text {
  margin-right: 10px;
}
.wrapper__breadcrumbs-text--active {
  color: rgba(121, 123, 134, 1);
}
.card__content {
  margin-right: 80px;
}
.card__btn-group {
  margin-right: 80px;
}
.title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  margin-bottom: 40px;
}
.title__items--flex {
  display: flex;
  align-items: baseline;
}
.title__items---header-typography {
  color: rgba(31, 36, 50, 1);
  font-family: "Lato Regular", sans-serif;
  font-size: 44px;
  font-weight: 700;
  margin-right: 20px;
}
.title__items--count-typography {
  font-family: "Lato Regular", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(121, 123, 134, 1);
}
.title__items--clean-typography {
  font-family: "Lato Regular", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(121, 123, 134, 1);
  text-decoration: underline;
}
.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products-header__title {
  font-family: "Lato Regular", sans-serif;
  font-size: 30px;
  color: rgba(31, 36, 50, 1);
  margin-bottom: 70px;
}
.products-header__title--pages {
  margin: 0;
  display: flex;
  align-items: center;
  font-family: "Lato Regular", sans-serif;
  font-size: 24px;
  color: #212121;
  padding: 0 15px;
}
.products-header__title--pages-at-all {
  font-size: 20px;
  display: inline-block;
  color: #797b86;
  padding-left: 10px;
}
.products-header__card-container {
  display: flex;
  width: 300px;
}
.products-cards {
  display: flex;
  margin-bottom: 100px;
  column-gap: 20px;
}
@media screen and (max-width: 992px) {
  .wrapper {
    min-width: auto;
    margin: 0 20px;
  }
  .wrapper__content {
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
