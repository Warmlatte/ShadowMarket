import { useAlertStore } from '@/store/AlertStore'

const showSuccess = (message) => {
  const alertStore = useAlertStore()
  alertStore.showAlert('alert-success', message)
}

const showError = (message) => {
  const alertStore = useAlertStore()
  alertStore.showAlert('alert-error', message)
}

const showWarning = (message) => {
  const alertStore = useAlertStore()
  alertStore.store.showAlert('alert-warning', message)
}

const showInfo = (message) => {
  const alertStore = useAlertStore()
  alertStore.store.showAlert('alert-info', message)
}
export { showSuccess, showError, showWarning, showInfo }
