<script setup>
import { ref, onMounted } from 'vue'
import { itemsAPIs } from '@/apis/itemsAPIs'
import * as AlertController from '@/utils/alertController'
import EditModal from './Items/EditModal.vue'
import DeleteConfirmation from './Items/DeleteConfirmation.vue'
import Alert from './AlertComponent.vue'

const ItemInfo = ref([])

const getAllItems = async () => {
  try {
    const { data } = await itemsAPIs.fetchAllItems()
    console.log(data)
    if (!data || data.length === 0) {
      ItemInfo.value = []
      return
    }

    ItemInfo.value = data
  } catch {
    AlertController.showError('資料溜走啦 (っ°д°;)っ')
  }
}

onMounted(() => {
  getAllItems()
})

// 即時更新編輯後的資料
const updateItemInList = (updatedItem) => {
  const index = ItemInfo.value.findIndex((item) => item.id === updatedItem.id)
  if (index !== -1) {
    ItemInfo.value[index] = { ...ItemInfo.value[index], ...updatedItem }
  }
}
</script>

<template>
  <Alert />
  <div class="flex justify-center h-auto my-10">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
      <div v-for="(item, index) in ItemInfo" :key="index">
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
