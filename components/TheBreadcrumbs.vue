<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__text">Главная</li>
    <li class="breadcrumbs__text breadcrumbs__text--active">Корзина</li>
  </ul>
</template>

<style scoped>
.breadcrumbs {
  display: flex;

  font-size: 14px;
  line-height: 20px;

  padding-left: 0;
  margin-bottom: 40px;
}

.breadcrumbs__text {
  margin-right: 20px;
  position: relative;

  list-style-type: none;
}

.breadcrumbs__text::after {
  content: "";
  width: 0;
  height: 0;

  border-top: 4px solid transparent;
  border-left: 4px solid #555;
  border-bottom: 4px solid transparent;

  position: absolute;
  transform: translate(10px, 7px);
}

.breadcrumbs__text:last-child::after {
  display: none;
}

.breadcrumbs__text--active {
  color: rgba(121, 123, 134, 1);
}
</style>
