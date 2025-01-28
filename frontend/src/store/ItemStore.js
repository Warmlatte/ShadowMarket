import { defineStore } from 'pinia'
import { ref } from 'vue'
import { itemsAPIs } from '@/apis/itemsAPIs'
import * as AlertController from '@/utils/alertController'

export const useItemStore = defineStore('item', () => {
  const items = ref([])

  const addItem = async (item) => {
    items.value.push(item)
  }

  const getAllItems = async () => {
    try {
      const { data } = await itemsAPIs.fetchAllItems()
      if (!data || data.length === 0) {
        items.value = []
        return
      }
      items.value = data
    } catch (error) {
      console.error('資料取得失敗:', error)
      AlertController.showError('資料溜走啦 (っ°д°;)っ')
    }
  }

  // 更新商品資料
  const updateItem = (updatedItem) => {
    const index = items.value.findIndex((item) => item.id === updatedItem.id)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updatedItem }
    }
  }

  return { items, getAllItems, addItem, updateItem }
})
