<script setup>
import { computed } from 'vue'
import { useAlertStore } from '../store/alertStore'

const alertStore = useAlertStore()

const iconPath = computed(() => {
  switch (alertStore.type) {
    case 'success':
      return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'error':
      return 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'warning':
      return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    default:
      return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
})
</script>

<template>
  <transition name="alert" appear>
    <div v-if="alertStore.visible" :class="`alert alert-${alertStore.type} w-1/2`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path :d="iconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
      <span>{{ alertStore.message }}</span>
    </div>
  </transition>
</template>

<style scoped>
.alert {
  position: fixed;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 9999;
  transition: all 1.5s ease-in-out;
}

.alert-enter-active {
  top: 20px;
  opacity: 1;
}

.alert-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>
