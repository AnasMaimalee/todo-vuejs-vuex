<template>
  <div class="container-fluid col-md-6">
    <div class="mt-4 " >
      single todo page  {{ todoId }}
      <div class="text-end">{{ todoId }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useStore()
const todoId = route.params.id
const todo = computed(() => store.state.todos.filter(todo => todo.id == todoId))
</script>

<style>

</style>