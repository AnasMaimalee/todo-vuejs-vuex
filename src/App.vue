<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->

  <div class="container fluid">
    <div class="text-center" style="margin: 10px auto 10px auto;">
      <div class="mt-5">
        <div class="text-center">
          <div class="row gl-2">
                <div class="col">
                  <span class="me-3"> <router-link :to="{name: 'Home'}">Projecs</router-link></span>  |
                  <span class="ms-3"> <router-link :to="{name: 'CreateTodo'}">Add New Project</router-link></span>  
                </div>
            </div>
        </div>
        </div>
      </div>
      <router-view/>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store =  useStore()

const todos = computed(() => store.state.todos)


</script>

<style scoped>
a{
  text-decoration: none;
  padding: 4px;

}
a:hover{
  border-bottom: 4px solid antiquewhite;
}
a:active{
  color: antiquewhite;
  text-decoration: underline;
}
</style>
