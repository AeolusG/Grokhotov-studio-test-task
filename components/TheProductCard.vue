<template>
  <article class="card">
    <img class="card__img" :src="`/images/${image}`" />
    <h3 class="card__title">{{ partNumber }}</h3>
    <p class="card__description">{{ description }}</p>
    <div class="card__price">
      <p class="card__price card__price--rubles">{{ price }}</p>
      <p class="card__price card__price--euros">{{ priceInEuro }}</p>
    </div>
    <button type="button" class="card__button">Подробнее</button>
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

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  background-color: #f6f8fa;
  padding: 25px;
}

.card__title {
  font-size: 30px;
  color: rgba(31, 36, 50, 1);

  margin: 0;
}
.products-wrapper__pagination {
  display: flex;
  align-items: center;
}
.card__button {
  border-radius: 4px;
  border: none;
  padding: 14px 40px;

  background-color: rgb(0, 105, 180);
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  cursor: pointer;
}
.card__img {
  max-width: 250px;
}
.card-button:hover {
  background-color: rgb(14, 124, 202);
  transition: 0.2s ease;
}
.card__price {
  margin-top: 20px;
}
.card__description {
  flex-grow: 1;

  font-size: 14px;
  font-weight: 400;
  color: #1f2432;
  line-height: 20px;
}

.card__price--rubles {
  font-size: 22px;
  font-weight: 600;
  color: #1f2432;

  margin: 0;
  margin-bottom: 15px;
}

.card__price--euros {
  font-size: 16px;
  font-weight: 400;
  color: #797b86;

  margin: 0;
  margin-bottom: 20px;
}
</style>
