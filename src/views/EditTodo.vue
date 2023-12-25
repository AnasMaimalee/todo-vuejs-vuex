<template>
  <div class="container fulid col-md-6 mt-3">
    <div class="mt-4 p-4 border rounded-4">
        <div v-if="todo.length > 0">
            <form @submit="handleSubmit">
                    <div class="mb-3 mt-4">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Todo Title" v-model="todoTitle">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Body</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="todoBody"></textarea>
                        </div>
                        <div class="text-end mt-4">
                            <button class="btn btn-outline-primary" @click="updateTodo">Save</button>
                        </div>
                </form>
                {{ todoTitle}}
       
    </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import router from '@/router';
const store = useStore()

const route = useRoute()
const todoId = route.params.id
console.log(todoId)

const todo = computed(() => store.state.todos.filter(todo => todo.id == todoId))
// console.log(todo)

const todoTitle = ref(todo.value.length > 0 ? todo.value[0].title : '')
const todoBody = ref(todo.value.length > 0 ? todo.value[0].body : '')

const updateTodo = () =>{
    const updatedTodo = {
    id: todoId,
    title: todoTitle.value,
    body: todoBody.value,
    isCompleted: false,
}
    console.log(updatedTodo)
    store.dispatch('updateTodo', updatedTodo)
    console.log("dispaccc")
    router.push('/')
}


const handleSubmit = (event)=>{
    event.preventDefault()
}
</script>

<style>

</style>