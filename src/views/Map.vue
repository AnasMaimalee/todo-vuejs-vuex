<template>
  <div class="container-fluid col-md-6">
    <div class="text-center">
        countA {{ countA }} <br>
        CountB {{ countB }} <br>
        CountState {{ countState }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from 'vuex'

const store = useStore()

// const { getCountA} = mapGetters('ModuleA',['getCountA',])
// const { getCountB } = mapGetters('ModuleB',['getCountB'])
// const { count } = mapGetters('store', [
//     'count'
// ])

// console.log('getCount A', getCountA)
// const countState = computed(() => count.value)
// const countA = computed(() => getCountA.value)
// const countB = computed(() => getCountB.value)

const countA = computed(() => store.getters.getCountA)
const countB = computed(() => store.getters.getCountB)
const countState = computed(() => store.getters.count)
console.log('count', countA)
</script>

<style>

</style>