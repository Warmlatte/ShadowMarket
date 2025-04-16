<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useItemStore } from '@/store/ItemStore'

const itemStore = useItemStore()

// 確保Map始終是有效的
const itemModalsMap = ref(new Map())

// 更安全的方式打開模態窗口
const openModal = (itemId) => {
  nextTick(() => {
    const modal = itemModalsMap.value.get(itemId)
    if (modal) {
      modal.showModal()
    }
  })
}

const currentPage = computed(() => itemStore.currentPage)
const totalPages = computed(() => itemStore.totalPages)
const searchBar = ref(null)

const fetchItems = async (page) => {
  await itemStore.getAllItems(page, 9)

  if (window.innerWidth <= 768) {
    const searchBarPosition = searchBar.value.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: searchBarPosition - 150, // 偏移量
      behavior: 'smooth',
    })
  }
}

// Search
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

// 當顯示項目變化時，使用新的Map重置而不是改變原始引用
watch(displayedItems, () => {
  // 創建新的Map而不是重置現有Map的內容
  itemModalsMap.value = new Map()
})

onMounted(() => {
  fetchItems(1)
})

// 安全的設置模態窗口引用的函數
const setModalRef = (el, itemId) => {
  if (!el || !itemId) return

  // 確保map存在
  if (!itemModalsMap.value) {
    itemModalsMap.value = new Map()
  }

  // 設置引用
  itemModalsMap.value.set(itemId, el)
}
</script>

<template>
  <div class="w-full flex justify-center lg:px-20">
    <div class="w-full max-w-[1600px] mx-auto flex justify-between h-auto">
      <!-- Item  -->
      <div class="w-full lg:w-1/2 space-y-6 h-full p-3 lg:pr-4">
        <label ref="searchBar" class="flex input input-bordered items-center mx-2 lg:w-1/2">
          <input
            v-model="keyword"
            @keyup.enter="handleSearch"
            type="text"
            class="grow"
            placeholder="Search"
          />
          <button class="lg:hidden btn btn-ghost items-center" @click="handleSearch">
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
          </button>
        </label>

        <div
          v-if="displayedItems.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div v-for="item in displayedItems" :key="'item-' + item.id">
            <button
              @click="openModal(item.id)"
              class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
            >
              <div
                class="card bg-base-200 w-96 lg:w-[20rem] lg:h-[8rem] shadow-xl hover:bg-base-300"
              >
                <div class="card-body p-5">
                  <h2 class="card-title m-auto items-center text-yellow-500">{{ item.name }}</h2>
                </div>
              </div>
            </button>
            <dialog :ref="(el) => setModalRef(el, item.id)" class="modal">
              <div class="modal-box">
                <div>
                  <div class="flex justify-between">
                    <p class="text-4xl font-bold text-yellow-500">
                      {{ item.name }}
                      <span class="italic text-lg text-gray-500 ml-1">{{ item.type }}</span>
                    </p>
                  </div>
                  <div class="flex justify-between mt-3">
                    <span class="text-gray-400">{{ item.weight }} lb</span
                    ><span class="italic text-red-600">{{ item.rarity }}</span>
                  </div>
                  <div class="w-full h-1 bg-yellow-500 mt-3"></div>
                  <div class="mt-5">
                    <strong class="text-2xl">效果</strong>
                    <p class="mt-2 mb-5 text-lg">{{ item.effect }}</p>
                    <strong class="text-2xl">價格</strong>
                    <p class="mt-2 mb-5 text-lg text-yellow-400">{{ item.price }} gp</p>

                    <a
                      class="text-xl text-gray-400 lg:hover:text-gray-300 focus:outline-none"
                      :href="item.detail_url"
                      target="_blank"
                      ><strong>更多資訊</strong></a
                    >
                  </div>
                </div>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
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
              :checked="page === currentPage"
              @change="(e) => fetchItems(parseInt(e.target.value))"
            />
          </div>
        </div>
      </div>

      <div class="hidden w-1/2 lg:flex justify-center items-center ml-20">
        <img class="w-[22rem] h-[22rem] object-cover rounded-xl" src="/money.jpeg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
