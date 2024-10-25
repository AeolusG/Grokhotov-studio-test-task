<template>
  <div class="alert" :class="setBackground">
    <div class="alert__inner">
      <!-- bem v alert -->
      <button
        type="button"
        class="alert__remove-btn"
        @click="closeAlert"
      ></button>

      <div class="alert__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="alert__icon alert__icon--warn"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div class="alert__container">
        <h4 class="alert__title">Успех!</h4>
        <div class="alert__text">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      return this.status === "success"
        ? "background-success"
        : "background-error";
    },
  },
};
</script>

<style>
.alert {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 1rem;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
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

@keyframes slide-in {
  from {
    transform: translate(-50%, -100%);
  }
  to {
    transform: translate(-50%, 0);
  }
}

@keyframes slide-out {
  from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, -100%);
  }
}

.alert__inner {
  display: flex;
}

.alert__icon {
  flex-shrink: 0;
}

.alert__icon--warn {
  width: 1.5rem;
  height: 1.5rem;
  color: #4ade80;
}

.alert__container {
  margin-left: 0.75rem;
}

.alert__title {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #166534;
}

.alert__text {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #15803d;
}
.alert__remove-btn {
  background: none;
  border: none;
  background-image: url("/images/close.png");
  background-repeat: no-repeat;

  padding: 12px;
  margin-bottom: auto;

  cursor: pointer;
}
</style>
