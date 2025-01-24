<script setup>
import { ref } from 'vue'
import { apiClient } from '@/utils/request'

const responseMessage = ref('')

const testApi = async () => {
  try {
    const response = await apiClient.get('/items/')
    responseMessage.value = response
  } catch (error) {
    responseMessage.value = '連接失敗'
    console.error('API 回應錯誤', error)
  }
}
</script>

<template>
  <div>
    <h1>測試後端連接</h1>
    <button @click="testApi">測試</button>
    <p v-if="responseMessage">回應: {{ responseMessage }}</p>
  </div>
</template>

<style scoped></style>
