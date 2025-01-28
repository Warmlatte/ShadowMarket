import { useAlertStore } from '@/store/alertStore'

const showSuccess = (message) => {
  const alertStore = useAlertStore()
  alertStore.showAlert('success', message)
}

const showError = (message) => {
  const alertStore = useAlertStore()
  alertStore.showAlert('error', message)
}

export { showSuccess, showError }
