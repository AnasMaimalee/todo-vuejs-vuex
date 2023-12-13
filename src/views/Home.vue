<template>
    <div class="container fluid col-md-6">
       <div class="text-center">
            <p>Home Page</p>
            <todo />
       </div>
    </div>
</template>

<script setup>
import todo from '../components/Todo.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
const store =  useStore()


</script>

<style>

</style>