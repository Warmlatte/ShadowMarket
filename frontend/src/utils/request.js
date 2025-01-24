import axios from 'axios'

// 建立 axios 實例
const apiClient = axios.create({
  baseURL: 'http://localhost:3032/',
  timeout: 5000,
})

// request 攔截器
apiClient.interceptors.request.use(
  (config) => {
    // headers or token (JWT)
    // loading...
    return config
  },
  (error) => Promise.reject(error),
)

// response 攔截器
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API 回應錯誤', error)
    return Promise.reject(error)
  },
)

// 測試請求
const testConnection = async () => {
  try {
    const response = await apiClient.get('/items/')
    console.log('success', response)
  } catch (error) {
    console.error('error', error)
  }
}

testConnection()

export { apiClient }
