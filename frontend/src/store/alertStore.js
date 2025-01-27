import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const visible = ref(false)
  const type = ref('error')
  const message = ref('')

  const showAlert = (alertType, alertMessage) => {
    type.value = alertType
    message.value = alertMessage
    visible.value = true

    setTimeout(() => {
      visible.value = false
    }, 3000)
  }

  const hideAlert = () => {
    visible.value = false
  }

  return { visible, type, message, showAlert, hideAlert }
})
