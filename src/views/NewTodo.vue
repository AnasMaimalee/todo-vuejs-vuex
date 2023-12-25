<template>
    <div class="container-fluid col-md-6">
        <div class="mt-4 border rounded-4 p-4">
            <div class="text-center">Create New Todo</div>
            <div class="mt-3">
                <form @submit="handleSubmit">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Todo Title" v-model="todoTitle">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Body</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="todoBody"></textarea>
                        </div>
                        <div class="text-end mt-4">
                            <button class="btn btn-outline-primary" @click="createTodo">Create</button>
                        </div>
                </form>
        </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const todoTitle = ref('')
const todoBody =  ref('')
const todoLength = computed(() =>{
    return store.getters.todoLength
})
console.log(todoLength.value)
// console.log(todoLength.value)
const createTodo = () =>{
    const newTodo = {
        id:todoLength.value +1,
        title: todoTitle.value,
        body: todoBody.value,
        isCompleted: false
    }
    store.dispatch('createTodo', newTodo)
    todoBody.value = ''
    todoTitle.value=''

    router.push('/')
}
const handleSubmit = (event) =>{
    event.preventDefault()
}
</script>

<style>

</style>