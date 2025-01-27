<script setup>
import { ref } from 'vue'
import { deleteSmallTalk } from '@/data/smallTalk'

// Random Small Talk
const currentSmallTalk = ref('')
const deleteModal = ref(null)

const openModal = () => {
  currentSmallTalk.value = deleteSmallTalk[Math.floor(Math.random() * deleteSmallTalk.length)]
  deleteModal.value.showModal()
}

const submitForm = () => {
  deleteModal.value.close()
}
</script>

<template>
  <button
    @click="openModal"
    class="btn btn-active btn-secondary w-[5rem] h-[3rem] text-lg text-gray-800 hover:bg-[#F17657] transition duration-300"
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
            <button @click="resetInputValue" class="btn">取消 ❌</button>
            <button @click="submitForm" type="submit" class="btn">我就刪 😈</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
