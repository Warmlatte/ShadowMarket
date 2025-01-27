import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import EditItemView from '../views/EditItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
    },
    {
      path: '/management',
      name: 'management',
      component: EditItemView,
    },
  ],
})

export default router
