import { apiClient } from '@/utils/request'

export const authAPIs = {
  verify: async (password) => {
    return await apiClient.post('/auth/verify-password', { password })
  },
}
