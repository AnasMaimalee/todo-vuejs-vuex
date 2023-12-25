<template>
  <div class="mt-3 border p-3">
    Anas {{number }}
    <button class="btn btn-outline-primary" @click="count++">{{ count }} Times</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
// const props = defineProps({
//      number : Number 
// })
defineProps(['number'])
const count = ref(0)

</script>

<style>

</style>