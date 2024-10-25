<template>
  <div class="viewed">
    <h2 class="viewed-title">Просмотренные товары</h2>

    <div class="viewed-pagination">
      <button
        class="viewed-pagination__btns viewed-pagination__btns--left"
        @click="swiper.slidePrev()"
      ></button>
      <div class="viewed-pagination__pages"></div>
      <button
        class="viewed-pagination__btns viewed-pagination__btns--right"
        @click="swiper.slideNext()"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const swiper = useSwiper();
</script>

<style scoped>
.viewed {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.viewed-title {
  font-size: 30px;
  color: rgba(31, 36, 50, 1);

  margin-bottom: 70px;
}
.viewed-pagination {
  display: flex;
  align-items: center;

  margin: 0;

  font-size: 20px;
  color: #797b86;
}
.viewed-pagination__pages {
  padding: 0 20px;
}
.viewed-pagination__pages--current {
  font-size: 24px;
  color: #212121;
}
.viewed-pagination__pages--padding {
  padding-left: 10px;
  padding-right: 10px;
}
.viewed-pagination__btns {
  background-color: #90a2b5;
  border-radius: 50%;
  border: none;

  padding: 25px;
}
.viewed-pagination__btns--left {
  background-image: url("/images/arrowleft.png");
  background-repeat: no-repeat;
  background-position: center;
}
.viewed-pagination__btns--right {
  background-image: url("/images/arrowright.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
