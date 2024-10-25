<template>
  <div class="wrapper">
    <TheHeader :productsCount="totalCount" :productsTotalPrice="totalSum" />

    <TheCart />

    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :pagination="pagination"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <template v-slot:container-start> <TheSwiperControls /></template>

      <SwiperSlide v-for="slide in products" :key="slide">
        <div class="viewed-cards">
          <TheProductCard
            v-for="card in products"
            :image="card.img"
            :description="card.description"
            :part-number="card.partNumber"
            :price="card.price"
            :price-in-euro="card.priceInEuro"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <TheAlert
      v-if="alert.isShown"
      :status="alert.status"
      :text="alert.text"
      @close-alert="closeAlert"
    />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useProductStore } from "./stores/store";

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
    ...mapActions(useProductStore, ["cleanCart", "showAlert", "closeAlert"]),
  },

  computed: {
    ...mapState(useProductStore, [
      "cart",
      "products",
      "totalSum",
      "totalCount",
      "alert",
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
  width: 1280px;
  margin: auto;
}

.viewed-cards {
  display: flex;
  margin-bottom: 100px;
  column-gap: 20px;
}
</style>

<style>
body {
  font-family: "Lato Regular", sans-serif;
  min-width: 1300px;
}
</style>
