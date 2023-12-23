// Composable
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: "/rooms/:id",
    name: "RoomView",
    component: () => import("@/views/RoomView.vue"),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
