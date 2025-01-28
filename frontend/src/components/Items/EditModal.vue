<script setup>
import { ref, watch } from 'vue'
import { editSmallTalk } from '@/data/smallTalk.js'
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

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

watch(
  () => props.item,
  (newItems) => {
    itemName.value = newItems.name
    itemType.value = newItems.type
    itemEffect.value = newItems.effect
    itemPrice.value = newItems.price
    itemWeight.value = newItems.weight
    itemRarity.value = newItems.rarity
    itemLink.value = newItems.detail_url
  },
  { immediate: true },
)

// Random Small Talk
const currentSmallTalk = ref('')
const editModal = ref(null)

const openModal = () => {
  currentSmallTalk.value = editSmallTalk[Math.floor(Math.random() * editSmallTalk.length)]
  if (props.item) {
    itemName.value = props.item.name || ''
    itemType.value = props.item.type || ''
    itemEffect.value = props.item.effect || ''
    itemPrice.value = props.item.price || ''
    itemWeight.value = props.item.weight || ''
    itemRarity.value = props.item.rarity || ''
    itemLink.value = props.item.detail_url || ''
  }
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

const emit = defineEmits(['update-item'])

const editItems = async () => {
  try {
    const data = {
      id: props.item.id,
      name: itemName.value.trim(),
      type: itemType.value.trim(),
      effect: itemEffect.value.trim(),
      price: Number(itemPrice.value),
      weight: Number(itemWeight.value),
      rarity: itemRarity.value.trim(),
      detail_url: itemLink.value.trim(),
    }

    await itemsAPIs.updateItem(props.item.id, data)

    emit('update-item', data)

    AlertController.showSuccess('編輯成功 (๑•̀ω•́๑)')
    resetInputValue()
    editModal.value.close()
  } catch (error) {
    console.error(error)
    AlertController.showError('編輯失敗 (っ°д°;)っ')
  }
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
            <button @click="editItems" type="submit" class="btn">送出 🚀</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
