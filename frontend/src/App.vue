<script setup>
import { RouterView } from 'vue-router'
import Alert from './components/AlertComponent.vue'
import ChatBox from './components/ChatBox.vue'
</script>

<template>
  <Alert />
  <ChatBox />
  <RouterView />
</template>

<style scoped></style>
