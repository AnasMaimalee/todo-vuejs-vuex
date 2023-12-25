<template>
  <div class="mt-3 border p-3">
    {{props.letter}}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
     letter : String 
})
</script>

<style>

</style>