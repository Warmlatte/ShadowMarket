<script setup>
import { ref, computed, onMounted } from 'vue'
import EditModal from './Items/EditModal.vue'
import DeleteConfirmation from './Items/DeleteConfirmation.vue'
import { useItemStore } from '@/store/ItemStore'

const itemStore = useItemStore()

onMounted(() => {
  itemStore.getAllItems()
})

const updateItemInList = (updatedItem) => {
  itemStore.updateItem(updatedItem)
}

const keyword = ref('')
const handleSearch = () => {
  if (keyword.value === '') {
    return
  }
  itemStore.lookupItem(keyword.value)
  keyword.value = ''
}

const displayedItems = computed(() =>
  itemStore.searchItems.length > 0 ? itemStore.searchItems : itemStore.items,
)
</script>

<template>
  <div class="w-1/4 ml-24 mt-10">
    <label class="input input-bordered flex items-center">
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
  </div>
  <div class="flex justify-center h-auto my-10">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <div v-for="(item, index) in displayedItems" :key="index">
        <div
          class="flex flex-col justify-center items-center space-y-2 w-48 h-[12rem] bg-gray-700 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <div
            class="flex justify-center items-center text-center w-[10.5rem] h-[7rem] bg-base-200 rounded-xl overflow-hidden"
          >
            <p class="break-words p-5 text-2xl font-bold text-yellow-500">{{ item.name }}</p>
          </div>
          <div class="flex flex-row space-x-2">
            <EditModal :item="item" @update-item="updateItemInList" />
            <DeleteConfirmation :item="item.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
