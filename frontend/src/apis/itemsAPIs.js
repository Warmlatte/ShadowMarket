import { apiClient } from '@/utils/request'

export const itemsAPIs = {
  fetchAllItems: async (page = 1, limit = 9) => {
    return await apiClient.get(`/items?page=${page}&limit=${limit}`)
  },

  createItem: async (data) => {
    return await apiClient.post('/items/', data)
  },

  updateItem: async (id, data) => {
    return await apiClient.put(`/items/${id}/`, data)
  },

  deleteItem: async (id) => {
    return await apiClient.delete(`/items/${id}/`)
  },

  searchItem: async (keyword, type, rarity) => {
    return await apiClient.get(`/items/search/?keyword=${keyword}&type=${type}&rarity=${rarity}`)
  },
}
