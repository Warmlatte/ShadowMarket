<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { passwordSmallTalk, errorSmallTalk } from '@/data/smallTalk'
import * as AlertController from '@/utils/alertController'
import { authAPIs } from '@/apis/authAPIs'

const router = useRouter()

const passwordModal = ref(null)
const passwordValue = ref('')
const currentSmallTalk = ref('')

const openModal = () => {
  currentSmallTalk.value = passwordSmallTalk[Math.floor(Math.random() * passwordSmallTalk.length)]
  passwordModal.value.showModal()
}

const checkAndNavigate = async () => {
  const token = localStorage.getItem('authToken')

  if (token) {
    try {
      await authAPIs.verifyToken(token)
      AlertController.showSuccess('歡迎回來，記得十五分鐘後要重新輸入密碼喔 (´∀｀)♡')
      router.push('/management')
    } catch {
      localStorage.removeItem('authToken')
      AlertController.showError('授權已過期，請重新輸入 (。・ω・。)')
      openModal()
    }
  } else {
    openModal()
  }
}

const verifyPassword = async () => {
  if (passwordValue.value === '') return

  try {
    const response = await authAPIs.verify(passwordValue.value)
    if (response.token) {
      localStorage.setItem('authToken', response.token)
      AlertController.showSuccess('密碼正確，歡迎回來 (´∀｀)♡')
      router.push('/management')

      passwordValue.value = ''
      passwordModal.value.close()
    }
  } catch {
    errorSmallTalk.value = errorSmallTalk[Math.floor(Math.random() * errorSmallTalk.length)]
    AlertController.showError(errorSmallTalk.value)
    passwordValue.value = ''
  }
}
</script>

<template>
  <button @click="checkAndNavigate" class="btn btn-ghost btn-circle">
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      style="fill: #b2ccd6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7137 2.12656C15.8784 1.69663 14.7918 2.39036 12.6187 3.77783L12.0565 4.13679C11.4389 4.53106 11.1301 4.7282 10.7836 4.78478C10.4371 4.84135 10.092 4.75097 9.40191 4.57019L8.77361 4.4056C6.34506 3.76944 5.13079 3.45136 4.43551 4.1312C3.74024 4.81103 4.02442 6.03855 4.59279 8.4936L4.73983 9.12875C4.90135 9.82639 4.9821 10.1752 4.91653 10.5216C4.85096 10.868 4.64648 11.1727 4.23754 11.7821L3.86521 12.3369C2.42609 14.4815 1.70653 15.5538 2.11218 16.4039C2.51782 17.254 3.78002 17.3189 6.30442 17.4487L6.95753 17.4823C7.67487 17.5192 8.03356 17.5377 8.33956 17.6952C8.64557 17.8526 8.86425 18.1314 9.30163 18.6888L9.69981 19.1963C11.2389 21.1578 12.0085 22.1386 12.9545 21.9842C13.9005 21.8297 14.3964 20.6423 15.3882 18.2675L15.6448 17.6531C15.9266 16.9783 16.0675 16.6409 16.3222 16.3918C16.5769 16.1428 16.9165 16.0104 17.5958 15.7454L18.2142 15.5043C20.6046 14.572 21.7997 14.1059 21.9787 13.1603C22.1577 12.2148 21.202 11.416 19.2906 9.81846L18.7961 9.40516C18.2529 8.9512 17.9813 8.7242 17.8327 8.4128C17.6841 8.10139 17.6753 7.74082 17.6578 7.01967L17.6418 6.36312C17.58 3.82537 17.5491 2.5565 16.7137 2.12656Z"
        fill="#b2ccd6"
      />
      <path
        opacity="0.5"
        d="M19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L19.5303 18.4697Z"
        fill="#b2ccd6"
      />
    </svg>
  </button>
  <dialog ref="passwordModal" class="modal">
    <div class="modal-box">
      <h3 class="text-3xl font-bold">請輸入密碼 (≖＿≖)✧</h3>
      <p class="opacity-70 text-md mt-3 italic">
        {{ currentSmallTalk }}
      </p>
      <form @submit.prevent="verifyPassword" class="mt-8 mb-5 flex justify-between items-center">
        <input type="text" name="username" autocomplete="username" class="hidden" />
        <input
          v-model="passwordValue"
          type="password"
          placeholder="請輸入密語..."
          autocomplete="new-password"
          class="input input-bordered input-accent w-full max-w-xs"
        />
        <button type="submit" class="hidden md:block btn btn-outline btn-accent">確認...?</button>
      </form>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
