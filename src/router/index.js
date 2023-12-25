import EditTodoVue from '@/views/EditTodo.vue'
import HomeVue from '@/views/Home.vue'
import NewTodoVue from '@/views/NewTodo.vue'
import PracticeVue from '@/views/Practice.vue'
import MapVue from '@/views/Map.vue'
import ShowSingleTodoVue from '@/views/ShowSingleTodo.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 {
  path: '/',
  name: "Home",
  component: HomeVue
 },

 {
  path: '/home/create-Todo',
  name: 'CreateTodo',
  component: NewTodoVue
 },
 
 {
   path: '/home/todo/:id',
   name: 'TodoShow',
   component: ShowSingleTodoVue,
   props: true
 },

{
  path: '/todo/edit/:id',
  name: 'EditTodo',
  component: EditTodoVue,
  props: true
},

{
  path: '/home/practice',
  name: 'Practice',
  component: PracticeVue
},

{
  path: '/home/modules/mapGetters',
  name: 'mapGetters',
  component: MapVue
}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
