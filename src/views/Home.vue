<template>
    <div class="container fluid col-md-8">
       <div class="text-center" style="margin-top: 70px;">
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