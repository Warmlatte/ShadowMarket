<script setup>
import { ref, computed, onMounted } from 'vue'
import EditModal from './Items/EditModal.vue'
import DeleteConfirmation from './Items/DeleteConfirmation.vue'
import { useItemStore } from '@/store/ItemStore'

const itemStore = useItemStore()

const totalPages = computed(() => itemStore.totalPages || 1)
const storeCurrentPage = computed(() => itemStore.currentPage || 1)
const itemsPerPage = 10
const searchBar = ref(null)

const fetchItems = async (page) => {
  await itemStore.getAllItems(page, itemsPerPage)

  if (window.innerWidth <= 768) {
    const searchBarPosition = searchBar.value.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: searchBarPosition - 150, // 偏移量
      behavior: 'smooth',
    })
  }
}

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

onMounted(() => {
  fetchItems(1)
})
</script>

<template>
  <div class="md:w-2/5 md:ml-24 lg:w-1/4 lg:ml-24 mt-10 mx-5">
    <label ref="searchBar" class="input input-bordered flex items-center">
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
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
      <div v-for="(item, index) in displayedItems" :key="index">
        <div
          class="flex flex-col justify-center items-center space-y-2 w-[10rem] h-[10rem] md:w-48 md:h-[12rem] bg-gray-700 rounded-xl shadow-xl md:hover:shadow-2xl md:hover:-translate-y-2 transition duration-300"
        >
          <div
            class="flex justify-center items-center text-center w-[9rem] h-[5rem] md:w-[10.5rem] md:h-[7rem] bg-base-200 rounded-xl overflow-hidden"
          >
            <p class="break-words text-lg p-3 md:p-5 md:text-xl font-bold text-yellow-500">
              {{ item.name }}
            </p>
          </div>
          <div class="flex flex-row space-x-2">
            <EditModal :item="item" @update-item="updateItemInList" />
            <DeleteConfirmation :item="item.id" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="join">
      <input
        v-for="page in totalPages"
        :key="page"
        class="join-item btn btn-square"
        type="radio"
        name="pagination"
        :aria-label="`${page}`"
        :value="page"
        :checked="page === storeCurrentPage"
        @change="(e) => fetchItems(parseInt(e.target.value))"
      />
    </div>
  </div>
</template>

<style scoped></style>
