import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
const routes = [
  { path: '/', component: Home, name: 'Home page' },
  { path: '/todos', component: () => import('../pages/TodoIndex.vue'), name: 'Todos app' },
  { path: '/todo/:todoId', component: () => import('../pages/TodoDetails.vue'), name: 'Todo Details' },
  { path: '/todo/edit/:todoId?', component: () => import('../pages/TodoEdit.vue'), name: 'Todo Edit' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
