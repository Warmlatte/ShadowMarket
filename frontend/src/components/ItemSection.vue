<script setup>
import { ref, computed, onMounted } from 'vue'
import { useItemStore } from '@/store/ItemStore'

const itemStore = useItemStore()

const itemModals = ref([])
const openModal = (index) => {
  itemModals.value[index].showModal()
}

const displayedItems = computed(() =>
  itemStore.searchItems.length > 0 ? itemStore.searchItems : itemStore.items,
)

onMounted(() => {
  itemStore.getAllItems()
})
</script>

<template>
  <div class="w-full flex justify-between h-[55vh]">
    <!-- Item  -->
    <div class="w-full lg:w-1/2 space-y-6 mb-10 overflow-y-auto h-full pr-4">
      <div
        v-if="displayedItems.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-24"
      >
        <div v-for="(item, index) in displayedItems" :key="'modal-' + item.id">
          <button
            @click="openModal(index)"
            class="btn btn-ghost w-full h-auto bg-transparent hover:bg-transparent hover:shadow-none p-0"
          >
            <div class="card bg-base-200 w-96 lg:w-[20rem] lg:h-[8rem] shadow-xl hover:bg-base-300">
              <div class="card-body p-5">
                <h2 class="card-title m-auto items-center text-yellow-500">{{ item.name }}</h2>
              </div>
            </div>
          </button>
          <dialog ref="itemModals" class="modal">
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
                    class="text-xl text-gray-400 hover:text-gray-300"
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
    </div>

    <!-- 固定的 img 區 -->
    <div class="hidden lg:block w-1/2 h-full sticky top-0">
      <div class="w-full h-full m-auto overflow-hidden flex justify-center">
        <img class="w-[400px] h-[330px] object-cover rounded-xl m-auto" src="/money.jpeg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
