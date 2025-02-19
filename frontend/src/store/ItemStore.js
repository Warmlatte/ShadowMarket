import { defineStore } from 'pinia'
import { ref } from 'vue'
import { itemsAPIs } from '@/apis/itemsAPIs'
import * as AlertController from '@/utils/alertController'

export const useItemStore = defineStore('item', () => {
  const items = ref([])
  const searchItems = ref([])

  const currentPage = ref(1)
  const totalPages = ref(1)
  const isLoading = ref(false)

  const getAllItems = async (page = 1, limit = 9) => {
    if (isLoading.value) return
    isLoading.value = true

    try {
      const response = await itemsAPIs.fetchAllItems(page, limit)
      if (!response.data || response.data.length === 0) {
        items.value = []
        totalPages.value = 1
        return
      }

      items.value = response.data.items
      totalPages.value = response.data.totalPages || 1
      currentPage.value = response.data.currentPage || page
    } catch {
      AlertController.showError('資料溜走啦 (っ°д°;)っ')
    }

    isLoading.value = false
  }

  const addItem = async (item) => {
    items.value.push(item)
  }

  // 更新商品資料
  const updateItem = (updatedItem) => {
    const index = items.value.findIndex((item) => item.id === updatedItem.id)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updatedItem }
    }
  }

  // 搜尋商品
  const lookupItem = async (keyword, type = '', rarity = '') => {
    try {
      const { data } = await itemsAPIs.searchItem(keyword, type, rarity)
      if (!data || data.length === 0) {
        searchItems.value = []
        AlertController.showError('沒有符合條件的商品 (´･_･`)')
        return
      }
      AlertController.showSuccess('搜尋成功 (๑•̀ω•́๑)')
      searchItems.value = data
    } catch {
      AlertController.showError('搜尋失敗，請稍後再試 (っ°д°;)っ')
      searchItems.value = []
    }
  }

  const resetSearchItems = () => {
    searchItems.value = ''
    AlertController.showSuccess('清除搜尋結果成功 (๑•̀ω•́๑)')
  }

  return {
    items,
    searchItems,
    currentPage,
    totalPages,
    isLoading,
    getAllItems,
    addItem,
    updateItem,
    lookupItem,
    resetSearchItems,
  }
})
