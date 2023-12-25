<template>
  <div class="container-fluid">
      <div class="row">
        <!-- Left section -->
        <div class="col-md-3 ">
          <div class="left-section" style="margin-top: px;">
            <!-- Your content for the left section -->
            <!-- For example: -->
            
          </div>
        </div>
      
        <!-- Top section -->
        <div class="col-md-9" >
          <div class="top-section">
            <div class="container fluid">
              <div class="text-center">
                <div class="mt-5">
                  <div class="text-center">
                    <div class="row gl-2">
                          <div class="col text-center">
                            <span class="me-3"> <router-link :to="{name: 'Home'}">Projecs</router-link></span>  |
                            <span class="ms-3"> <router-link :to="{name: 'Practice'}">Modules</router-link></span>  
                          </div>
                          <div class="col">
                            <div class="" style="margin-left: -25px;">
                              <button class="btn btn-outline-primary" @click="toggleDarkMode">
                                <i v-if="darkmode" class="bi bi-moon-fill"></i>
                                <i v-else class="bi bi-sun-fill"></i>
                              </button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div> 
             </div>
          </div>
        </div>
      </div>
      <!-- Center section -->
      <div class="row">
        <div class="col-md-12">
          <div class="center-section" style="margin-top: px;">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  <div>
  </div>
</template>

<script setup>
import Home from './views/Home.vue';
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
const store =  useStore()

const todos = computed(() => store.state.todos)
const darkmode = ref(false)

const toggleDarkMode = () =>{
  darkmode.value =! darkmode.value
}
watchEffect (() =>{
  if(darkmode.value){
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
})

</script>

<style>
a{
  text-decoration: none;
  padding: 4px;
  font-size: 1.3em;

}
.dark-mode{
  background-color: #424242;
  color: #fff;
}
a:hover{
  border-bottom: 4px solid antiquewhite;
}
a:active{
  color: antiquewhite;
  text-decoration: underline;
}
.sidebar{
  padding: 20px;
  background-color: #424242;
}
</style>
