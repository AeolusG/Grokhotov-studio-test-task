<template>
  <div class="alert" :class="setBackground">
    <button
      type="button"
      class="alert__remove-btn"
      @click="closeAlert"
    ></button>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
import Status from "~/utils/alertStatus";

export default {
  props: {
    status: {
      type: String,
      default: null,
    },

    text: {
      type: String,
      default: null,
    },
  },
  emits: ["close-alert"],

  methods: {
    closeAlert() {
      this.$emit("close-alert");
    },
  },

  computed: {
    setBackground() {
      return this.status === Status.SUCCESS
        ? "background-success"
        : "background-error";
    },
  },
};
</script>

<style>
.alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  padding: 1rem;
  border-radius: 0.375rem;
  z-index: 10;
}
.background-success {
  background: #f0fdf4;
}
.background-error {
  background: #fdf0f0;
}
.alert.active {
  animation: slide-in 0.5s ease-in-out;
}

.alert.hide {
  animation: slide-out 0.5s ease-in-out;
}

.alert__remove-btn {
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  border: none;
  background-image: url("/images/close.png");
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: auto;
  width: 40px;
  height: 40px;

  cursor: pointer;
}
</style>
