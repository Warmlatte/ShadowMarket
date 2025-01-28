<script setup>
import { ref } from 'vue'
import { deleteSmallTalk } from '@/data/smallTalk'
import * as AlertController from '@/utils/alertController'
import { itemsAPIs } from '@/apis/itemsAPIs'
import { useItemStore } from '@/store/ItemStore'

const itemStore = useItemStore()

const props = defineProps({
  item: {
    type: Number,
    required: true,
  },
})

// Random Small Talk
const currentSmallTalk = ref('')
const deleteModal = ref(null)

const openModal = () => {
  currentSmallTalk.value = deleteSmallTalk[Math.floor(Math.random() * deleteSmallTalk.length)]
  deleteModal.value.showModal()
}

const deleteItem = async () => {
  try {
    await itemsAPIs.deleteItem(props.item)
    itemStore.items = itemStore.items.filter((item) => item.id !== props.item)
    AlertController.showSuccess('刪除成功 (๑•̀ω•́๑)')
    deleteModal.value.close()
  } catch (error) {
    if (error.response.data.status === 401 || error.response.data.status === 403) {
      AlertController.showError('授權已過期，請重新輸入 (。・ω・。)')
      return
    }
    AlertController.showError('刪除失敗 (っ°д°;)っ')
  }
}
</script>

<template>
  <button
    @click="openModal"
    class="btn btn-active btn-secondary w-[4rem] h-[1.5rem] text-[0.9rem] p-0 md:w-[5rem] md:h-[3rem] md:text-lg text-gray-800 hover:bg-[#F17657] transition duration-300"
  >
    刪除
  </button>
  <dialog ref="deleteModal" class="modal">
    <div class="modal-box">
      <h3 class="text-3xl font-bold">刪除商品 (๑•́ ₃ •̀๑)</h3>
      <p class="opacity-70 text-md mt-3 italic">
        {{ currentSmallTalk }}
      </p>
      <p class="text-2xl mt-5 font-semibold opacity-90">⚠️ 刪除之後就不能恢復囉</p>
      <div class="modal-action">
        <form method="dialog">
          <div class="space-x-2">
            <button class="btn">取消 ❌</button>
            <button @click="deleteItem" type="submit" class="btn">我就刪 😈</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
