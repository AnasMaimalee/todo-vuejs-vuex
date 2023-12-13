import EditTodoVue from '@/views/EditTodo.vue'
import HomeVue from '@/views/Home.vue'
import NewTodoVue from '@/views/NewTodo.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 {
  path: '/home',
  name: "Home",
  component: HomeVue
 },

 {
  path: '/create-Todo',
  name: 'CreateTodo',
  component: NewTodoVue
 },

{
  path: '/edit/:id',
  name: 'EditTodo',
  component: EditTodoVue,
  props: true
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
