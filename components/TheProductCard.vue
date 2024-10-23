<template>
  <article class="card-wrapper">
    <img class="card-img" :src="`/images/${image}`" />
    <h3 class="card-wrapper__title">{{ partNumber }}</h3>
    <p class="card-description">{{ description }}</p>
    <div class="card-price">
      <p class="card-price__rubles">{{ price }}</p>
      <p class="card-price__euros">{{ priceInEuro }}</p>
    </div>
    <button type="button" class="card-button">Подробнее</button>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: null,
    },
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
      type: String,
      default: null,
    },
    priceInEuro: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/fonts/fonts.css";

.card-wrapper {
  background-color: #f6f8fa;
  padding: 25px;
  display: flex;
  flex-direction: column;
}
.card-wrapper__title {
  font-family: "Lato Regular", sans-serif;
  font-size: 30px;
  color: rgba(31, 36, 50, 1);
  margin: 0;
}
.products-wrapper__pagination {
  display: flex;
  align-items: center;
}
.card-button {
  background-color: rgb(0, 105, 180);
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 14px 40px;
  font-family: "Lato Regular", sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.card-img {
  max-width: 250px;
}
.card-button:hover {
  background-color: rgb(14, 124, 202);
  transition: 0.2s ease;
}
.card-price {
  margin-top: 20px;
}
.card-description {
  flex-grow: 1;
  font-family: "Lato Regular", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1f2432;
  line-height: 20px;
}

.card-price__rubles {
  font-family: "Lato Regular", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #1f2432;
  margin: 0;
}

.card-price__euros {
  font-family: "Lato Regular", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #797b86;
  margin: 0;
  margin-bottom: 20px;
}

@media screen and (max-width: 992px) {
  .card-wrapper {
    background-color: #f6f8fa;
    padding: 25px;
    display: flex;
    flex-direction: column;
    max-width: min-content;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
}
</style>
