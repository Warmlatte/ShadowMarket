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
  } catch {
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
  <div class="fixed bottom-10 right-4 z-10">
    <button
      @click="toggleChat"
      class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-base-200 font-medium transition-all duration-300 hover:w-32"
    >
      <div
        class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100"
      >
        影界入口
      </div>
      <div class="absolute right-3.5">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  </div>

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
        <button
          @click="sendMessage"
          class="hidden md:block group relative h-12 overflow-hidden rounded-md bg-base-300 px-6 transition"
        >
          <span>發送</span>
          <div
            class="absolute inset-0 h-full w-0 bg-white/10 transition-[width] group-hover:w-full"
          ></div>
        </button>
        <button
          @click="sendMessage"
          class="md:hidden group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-500 bg-transparent px-6 font-medium transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none"
        >
          發送
        </button>
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
