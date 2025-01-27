<script setup>
import { ref } from 'vue'
import { editSmallTalk } from '@/data/smallTalk.js'

// All Inputs ref
const itemName = ref('')
const itemType = ref('')
const itemEffect = ref('')
const itemPrice = ref('')
const itemWeight = ref('')
const itemRarity = ref('')
const itemLink = ref('')

// Random Small Talk
const currentSmallTalk = ref('')
const editModal = ref(null)

const openModal = () => {
  currentSmallTalk.value = editSmallTalk[Math.floor(Math.random() * editSmallTalk.length)]
  editModal.value.showModal()
}

const resetInputValue = () => {
  itemName.value = ''
  itemType.value = ''
  itemEffect.value = ''
  itemPrice.value = ''
  itemWeight.value = ''
  itemRarity.value = ''
  itemLink.value = ''
}

const submitForm = () => {
  resetInputValue()
  editModal.value.close()
}
</script>

<template>
  <button
    @click="openModal"
    class="btn btn-active btn-primary w-[5rem] h-[3rem] text-lg text-gray-800 hover:bg-[#9FD192] transition duration-300"
  >
    編輯
  </button>
  <dialog ref="editModal" class="modal">
    <div class="modal-box">
      <h3 class="text-3xl font-bold">編輯商品 …..φ(-ω-｡`)</h3>
      <p class="opacity-70 text-sm mt-3 italic">{{ currentSmallTalk }}</p>
      <!-- input -->
      <div class="m-5 space-y-4">
        <!-- name -->
        <label class="input input-bordered flex items-center gap-2">
          <span>🎒</span>
          <input v-model="itemName" type="text" class="grow" placeholder="道具名稱" />
        </label>

        <!-- type -->
        <label class="input input-bordered flex items-center gap-2">
          <span>🛠️</span>
          <input v-model="itemType" type="text" class="grow" placeholder="類型" />
        </label>

        <!-- 效果 -->
        <label class="input input-bordered flex items-center gap-2">
          <span>🌀</span>
          <input v-model="itemEffect" type="text" class="grow" placeholder="效果" />
        </label>
        <!-- 價格 -->
        <label class="input input-bordered flex items-center gap-2">
          <span>💰</span>
          <input v-model="itemPrice" type="text" class="grow" placeholder="價格" />
        </label>
        <!-- 重量 -->
        <label class="input input-bordered flex items-center gap-2">
          <span>⚖️</span>
          <input v-model="itemWeight" type="text" class="grow" placeholder="重量" />
        </label>
        <!-- 稀有度 -->
        <label class="input input-bordered flex items-center gap-2">
          <span>⭐️</span>
          <input v-model="itemRarity" type="text" class="grow" placeholder="稀有度" />
        </label>
        <!-- link -->
        <label class="input input-bordered flex items-center gap-2">
          <span>🔗</span>
          <input v-model="itemLink" type="text" class="grow" placeholder="5etools 連結" />
        </label>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <div class="space-x-2">
            <button @click="resetInputValue" class="btn">取消 ❌</button>
            <button @click="submitForm" type="submit" class="btn">送出 🚀</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
