<script setup>
import { ref, nextTick } from 'vue'
import { aiAPIs } from '@/apis/aiAPIs'
import { askSmallTalk } from '@/data/smallTalk'

// 狀態管理
const isOpen = ref(false)
const messages = ref([
  {
    sender: '🦉',
    text: '喔喔？新客人？！(๑•̀ㅂ•́)و✧ 先聲明，我可不是什麼普通小精靈，我可是大名鼎鼎的魔法商店首席顧問！咳咳…有什麼想問的嗎？',
  },
])
const userInput = ref('')
const isLoading = ref(false)
const chatBox = ref(null)
const currentSmallTalk = ref('')

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  messages.value.push({ sender: '你', text: userInput.value })
  isLoading.value = true
  currentSmallTalk.value = askSmallTalk[Math.floor(Math.random() * askSmallTalk.length)]

  const question = userInput.value
  userInput.value = ''

  await nextTick()
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }

  try {
    const response = await aiAPIs.askAI({ question })

    messages.value.push({
      sender: '🦉',
      text: response.answer || '哎呀，我好像被魔法干擾了，回答不出來呢！(╯︵╰,)',
    })
  } catch (error) {
    console.error('API 錯誤:', error)
    messages.value.push({
      sender: '🦉',
      text: '呃啊……我感覺魔力波動出了點問題！再試一次好嗎？(╥﹏╥)',
    })
  } finally {
    isLoading.value = false

    await nextTick()
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }
}
</script>

<template>
  <button
    @click="toggleChat"
    class="fixed bottom-40 right-6 btn btn-outline z-10 opacity-20 w h-[2rem]"
  >
    影界入口 ░▒▓█
  </button>

  <div v-if="isOpen" class="modal modal-open">
    <div class="modal-box relative max-w-3xl shadow-xl">
      <button @click="toggleChat" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>

      <h3 class="text-lg font-bold">🧙‍♂️ 魔法商店小精靈 (′゜ω。‵)</h3>
      <p class="opacity-70 text-sm mt-3 italic mb-5">
        魔力預備不足，隨時可能會消散，且用且珍惜 (´-ω-｀)
      </p>
      <!-- 聊天框 -->
      <div ref="chatBox" class="p-4 h-60 overflow-y-auto rounded-lg">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="chat"
          :class="msg.sender === '你' ? 'chat-end' : 'chat-start'"
        >
          <div
            class="chat-bubble"
            :class="msg.sender === '你' ? 'bg-base-content text-base-300' : 'bg-base-200'"
          >
            <strong v-if="msg.sender !== '你'">{{ msg.sender }}：</strong> {{ msg.text }}
          </div>
        </div>
        <div v-if="isLoading" class="chat chat-start">
          <div class="chat-bubble bg-base-200">{{ currentSmallTalk }}</div>
        </div>
      </div>

      <!-- 輸入框 -->
      <div class="flex mt-4 space-x-5 items-center">
        <input
          v-model="userInput"
          class="input input-bordered flex-1 rounded-l-md"
          placeholder="輸入你的問題..."
        />
        <button @click="sendMessage" class="btn rounded-r-md">發送</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 讓聊天泡泡對齊 */
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
</style>
