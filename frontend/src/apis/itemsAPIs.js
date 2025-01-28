import { apiClient } from '@/utils/request'

export const itemsAPIs = {
  fetchAllItems: async () => {
    return await apiClient.get('/items/')
  },

  createItem: async (data) => {
    return await apiClient.post('/items/', data)
  },

  updataItem: async (data) => {
    return await apiClient.put(`/items/${data.id}/`, data)
  },

  deleteItem: async (id) => {
    return await apiClient.delete(`/items/${id}/`)
  },
}
