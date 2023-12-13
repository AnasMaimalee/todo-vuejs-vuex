<template>
  <div class="mt-3">
                <div class="text-center">
                    <div class="mt-3"  v-for="todo in todos" :key="todo.id">
                        <div class="p-2 mt-4 rounded-3 bg-light"
                        :class="{'border-green': todo.isCompleted, 'border-red': !todo.isCompleted}">
                            <div class="row g-2 mt-2">
                                <div class="col">
                                    <div class="text-start">
                                        <p class="text-start ms-4">{{ todo.title }}</p>
                                    </div>
                                </div>
                                <div class="col text-end">
                                    
                                    <router-link :to="{name: 'EditTodo', params: {id: todo.id}}" class="btn btn-outline-primary me-3"  style="border: none;">
                                        <i class="bi bi-pencil-square"></i>
                                    </router-link>
                                    <button class="btn btn-outline-primary me-3" @click="deleteTodo(todo.id)" style="border: none;">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                    <button class="btn btn-outline-primary" style="border: none;" @click="updateTodoProperty(todo.id)">
                                        <i class="bi bi-check-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store =  useStore()
const completed = ref('isCompleted')
const todos = computed(() => store.state.todos)
const deleteTodo = (id) =>{
    store.dispatch('deleteTodo', id)
}
const updateTodoProperty = (id, propertyName, propertyValue) =>{
    store.dispatch('updateTodoProperty', {id, propertyName, propertyValue})
}
</script>

<style>
.border-green{
    border-left: 8px solid green;
}
.border-red{
    border-left: 5px solid red;
}
</style>