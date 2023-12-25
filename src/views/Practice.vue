<template>
      

  <div class="container-fluid col-md-6">
    <div class="mt-3 text-end">
      <router-link :to="{name: 'mapGetters'}">Map....</router-link>
    </div>
    <div class="text-center">
      <div class="mt-3">
      *module A
      {{ a }} <button class="btn btn-outline-primary" @click="increment">Increment</button>
      </div>
      <hr>
      <div class="mt-3">   
        {{ b }} <button class="btn btn-outline-primary" @click="incrementB(one)">Increment</button>
      </div>
      <hr>
      <div class=" mt-4">
        <div class="mt-4">*sum ModuleB Value with the rootState value</div>
        {{ sumStateCountA }}
      </div>
      <hr>

      <div class=" mt-4">
        <div class="mt-4">*sum ModuleB Value with the rootState value</div>
        {{ sumStateCountB }}
      </div>
      <hr>
      <div class="mt-3">
        *name spacing
        <div class="mt-3">

        </div>
      </div>
    </div>
    <hr>
    <div class="mt-3">
      slots*

       <!-- <div class="mt-3">
        <button class="btn btn-outline-primary">
          Click Me
        </button>
        sss
        <button class="btn btn-outline-danger">Danger Btn</button>
       </div> -->
     

    </div>
    <div class="">
        <div class="mt-4">
            <practice :myName="myName"/>
        </div>
        <div class="mt-3">
          <p>Ask Yes/No Question</p>
          <input v-model="question" :disabled="loading">
          <p>{{ answer }}</p>
        </div>
    </div> 
  
  </div>

</template>

<script setup>
import Practice from "@/components/Practice.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { mapGetters } from "vuex";

const one = ref(10)
const store = useStore()
const myName = computed(() => store.state.myName)
const a = computed(() =>store.getters.getCountA)
const b = computed(() =>store.getters.getCountB)

const sumStateCountA = computed(() => store.getters.getSumWithRootCountA)
const sumStateCountB = computed(() => store.getters.getSumWithRootCountB)

// const { getSumWithRootCountA, getSumWithRootCountB} = mapGetters([
//   'getSumWithRootCountA',
//   'getSumWithRootCountB'
// ]) 

// const sumStateCountA = computed(() => getSumWithRootCountA)
// const sumStateCountB = computed(() => getSumWithRootCountB)

console.log('sumstateddd', sumStateCountA.value)
console.log("getSumWithRootCount",sumStateCountA.value)
console.log(b.value)
const increment = () =>{
  store.dispatch('increment')
}
const incrementB = (one) =>{
  store.dispatch('incrementB', one)
}
onMounted(() =>{
  console.log(`The Component is now Mounted`)
})

const question = ref('')
const answer = ref('Questions Usually Contains a Question Mark, ; -)')
const loading = ref(false)

//warch work directly on ref

watch(question, async(newQuestion, oldQuestion) =>{
  if(newQuestion.includes('?')){
    loading.value = true
    answer.value = 'Thinking....'
    try{
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch(error){
      answer.value = 'Error! could not reach the API. ' + error
    }finally{
      loading.value =  false
    }
  }
} )
</script>

<style>

</style>