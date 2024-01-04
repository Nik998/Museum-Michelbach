// Composable
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '',
    name: 'Entrance',
    component: () => import('@/views/EntranceView.vue'),
  },
  {
    path: "/rooms/1",
    name: "Room1",
    component: () => import("@/views/Room1View.vue"),
    props: true,
  },
  {
    path: "/rooms/2",
    name: "Room2",
    component: () => import("@/views/Room2View.vue"),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
