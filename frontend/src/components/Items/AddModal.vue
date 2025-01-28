<script setup>
import { ref, computed } from 'vue'
import { addSmallTalk } from '@/data/smallTalk'
import * as AlertController from '@/utils/alertController'
import { itemsAPIs } from '@/apis/itemsAPIs'

// All Inputs ref
const itemName = ref('')
const itemType = ref('')
const itemEffect = ref('')
const itemPrice = ref('')
const itemWeight = ref('')
const itemRarity = ref('')
const itemLink = ref('')

// Form Validation
const isFormValid = computed(() => {
  return (
    itemName.value.trim() &&
    itemType.value.trim() &&
    itemEffect.value.trim() &&
    itemPrice.value.trim() &&
    itemWeight.value.trim() &&
    itemRarity.value.trim() &&
    itemLink.value.trim()
  )
})

// Random Small Talk
const currentSmallTalk = ref('')
const addModal = ref(null)

const openModal = () => {
  currentSmallTalk.value = addSmallTalk[Math.floor(Math.random() * addSmallTalk.length)]
  addModal.value.showModal()
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

const addItem = async () => {
  try {
    const data = {
      name: itemName.value.trim(),
      type: itemType.value.trim(),
      effect: itemEffect.value.trim(),
      price: Number(itemPrice.value),
      weight: Number(itemWeight.value),
      rarity: itemRarity.value.trim(),
      detail_url: itemLink.value.trim(),
    }
    await itemsAPIs.createItem(data)
    AlertController.showSuccess('新增成功 (๑´ڡ`๑)')
    resetInputValue()
    addModal.value.close()
  } catch (error) {
    console.log(error.response.data.message)
    if (error.response.data.message === '資料唯一性衝突') {
      AlertController.showError('這個商品已經有了喔 (。・ω・。)')
      return
    }
    AlertController.showError('新增失敗 (っ°д°;)っ')
    resetInputValue()
  }
}
</script>

<template>
  <button class="btn btn-ghost btn-circle" @click="openModal">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      class="h-5 w-5"
      viewBox="0 0 24 24"
      style="fill: #b2ccd6"
    >
      <path
        fill-rule="evenodd"
        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
      ></path>
    </svg>
  </button>
  <dialog ref="addModal" class="modal">
    <div class="modal-box">
      <h3 class="text-3xl font-bold">新增商品ヽ(・×・´)ゞ</h3>
      <p class="opacity-70 text-sm mt-3 italic">
        {{ currentSmallTalk }}
      </p>
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
            <button @click="addItem" :disabled="!isFormValid" type="submit" class="btn">
              送出 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
