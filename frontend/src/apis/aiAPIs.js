import { apiClient } from '@/utils/request'

export const aiAPIs = {
  askAI: async (data) => {
    return await apiClient.post('/ask/', data)
  },
}
