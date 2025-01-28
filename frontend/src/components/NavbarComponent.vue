<script setup>
import { ref } from 'vue'
import { useItemStore } from '@/store/ItemStore'
import { useRoute } from 'vue-router'
import AddModal from './Items/AddModal.vue'
import passwordModal from './PasswordModal.vue'

const route = useRoute()
const itemStore = useItemStore()

const keyword = ref('')

const handleSearch = () => {
  if (keyword.value === '') {
    return
  }

  itemStore.lookupItem(keyword.value)
  keyword.value = ''
}
</script>

<template>
  <div class="navbar bg-neutral h-[12vh]">
    <!-- Logo -->
    <div class="navbar-start">
      <RouterLink to="/" class="btn btn-ghost text-2xl">SHADOW MARKET <span>🌓</span></RouterLink>
    </div>
    <!-- Search -->
    <div class="navbar-end gap-1 md:gap-3 items-center">
      <label v-if="route.path === '/'" class="hidden md:flex input input-bordered items-center">
        <input
          v-model="keyword"
          @keyup.enter="handleSearch"
          type="text"
          class="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <button @click="itemStore.resetSearchItems" class="btn btn-ghost btn-circle">
        <svg
          fill="#b2ccd6"
          class="h-6 w-6 opacity-70"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 0c-1.65 0-3 1.35-3 3h-1l1.5 2 1.5-2h-1c0-1.11.89-2 2-2v-1zm2.5 1l-1.5 2h1c0 1.11-.89 2-2 2v1c1.65 0 3-1.35 3-3h1l-1.5-2z"
            transform="translate(0 1)"
          />
        </svg>
      </button>
      <AddModal v-if="route.path === '/management'" />
      <passwordModal />
    </div>
  </div>
</template>

<style scoped></style>
