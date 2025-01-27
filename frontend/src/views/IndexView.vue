<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import Notice from '@/components/NoticeSection.vue'
import Item from '@/components/ItemSection.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <Navbar class="sticky top-0 z-50" />
  <Notice />
  <Item />
  <Footer />
</template>

<style scoped></style>
