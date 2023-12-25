<template>
  <div class="container-fluid col-md-12" style="margin-top: 40px;">
    practicing Watchers and life circle hooks
    <div class="mt-4 border rounded-4 ">
        <div class="p-4">
            {{ myName }}
        </div>
       <div class="row g-2 p-3">
          <div class="col"> <FirstBlock :number="number"/></div>
          <div class="col"> <SecondBlock :letter="letter"/></div>
       </div>

       <div class="text-end">
        <button class="btn btn-outline-primary" @click="clickNumber">Click me</button>
        <button class="btn btn-outline-primary" @click="clickLetter">Click me</button>

       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"
import FirstBlock from "./FirstBlock.vue"
import SecondBlock from "./SecondBlock.vue"

const number = ref(0)
const letter = ref('')
const props = defineProps({
    myName: String
})
const clickLetter = () =>{
  letter.value = 'Anas Maimalee'
}
const clickNumber = () =>{
  number.value += 1
}
</script>

<style>

</style>