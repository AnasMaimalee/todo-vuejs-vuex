<template>
<div class="container-fluid">
    <div class="col-md-12">
        <div class="" style="margin-top: -40px;">
       
       <div class="text-center" style="margin-left: 180px;">
           <div class="col-md-8">
                <div class="text-center">
                    <div class="input-group mb-3">
                        <input @input="filterItems" v-model="searchQuery" type="text" class="form-control border rounded-3 p-2" placeholder="Search-Todo" aria-label="search-icon" aria-describedby="search-icon">
                    </div>
                </div>
           </div>
       </div>
       
          
               <!-- search aea -->
               <!-- <div class="" style="margin-bottom: 40px;">
                   <div class="text-center">
                       <div class="row g-2 justify-content-evenly">
                           <div class="col mt-2">
                               Search Todo
                           </div>
                           <div class="col">
                               <div class="text-start me-4 col-md-12">
                                 <input @input="filterItems" type="text" class="form-control" v-model="searchQuery" style="margin-left: -60px;">
                               </div>
                           </div>
                       </div>
                   </div>
               </div> -->
               <!-- displaying the search result  -->
                     
               <div class="mt-2">
                   <div v-if="filterTodo.length > 0">
                       <div v-for="searchTodo in filterTodo" :key="searchTodo.id">
                           <p>{{ searchTodo.title }}</p>
                       </div>
                   </div>
                   <!-- <div v-else>No record found</div> -->
               </div>
               <!-- /*couting completed and uncompletedTodo -->
               <div class="mt-3">
                   <div class="text-start mb-4">
                       <div class="row gl-2 col-md-12">
                           <div class="col">
                               <div class="col-md-12" style="margin-top: 0px;">
                                   <span class="">All Projets <span class="p-3 " style="border-radius: 50%;">{{ todos.length }}</span> </span>
                                   <span class="" style="color: #4caf50;" >Completed <span class="p-3 " style="borer:2px solid #4caf50; border-radius: 50%;">{{ completedTodo.length}}</span></span>
                                   <span class="" style="color: #f44336;">Uncompleted <span class="p-3" style="boder:2px solid #f44336; border-radius: 50%;">{{ unCompletedTodo.length }}</span></span>
                               </div>
                           
                           </div>
                           <div class="col">
                               <div class="text-end" style="margin-right: -20px;" >
                                   <span class="" ><router-link :to="{name:'CreateTodo'}"><button class="btn btn-outline-primary text-end"><i class="bi bi-plus"></i>New Todo</button></router-link></span>
                               </div>
                           </div>
                       </div>

                               <!-- <span class="text-end circle" :style="{borderColor: circleColor}" >
                                   <span class="innerCircle pt-2 ps-2 pe-2 pb-2" style="width: 40px; height: 60px; color: #fff;">A</span>
                               </span> -->
                               <!-- <v-progress-circular
                               :size="100"
                               :width="circleWidth"
                               color="red lighten -1"
                               :rotate="180"
                               :value="circleFill"
                               ></v-progress-circular> -->
                   </div>
               </div>  
               <!-- finish counting -->
               <transition-group
               tag="div"
               :css="true" 
               @before-enter="onBeforeEnter" 
               @enter="onEnter" 
               @leave="onLeave"
               >
                   <div class="text-center"><hr>
                   <div class="mt-3"  v-for="todo in filterTodos" :key="todo.id" >
                       <div class="p-2 mt-4 rounded-3 bg-light"
                       :class="{'border-green': todo.isCompleted, 'border-red': !todo.isCompleted}">
                           <div class="row g-2 mt-2">
                               <div class="col">
                                   <div class="text-start">
                                       <p class="text-start ms-4">
                                           <router-link :to="{name: 'TodoShow', params: {id: todo.id}}" >{{ todo.title }}</router-link>
                                       </p>
                                   </div>
                               </div>
                               <div class="col text-end">
                                   
                                   <router-link :to="{name: 'EditTodo', params: {id: todo.id}}" class="btn btn-outline-primary me-3"  style="border: none;">
                                       <i class="bi bi-pencil-square"></i>
                                   </router-link>
                                   <button class="btn btn-outline-primary me-3" @click="deleteTodo(todo.id)" style="border: none;">
                                       <i class="bi bi-trash"></i>
                                   </button>
                                   <button class="btn btn-outline-primary" style="border: none;" @click="updateTodoProperty(todo.id)">
                                       <i class="bi bi-check-all"  :class="{'color-green': todo.isCompleted, 'color-red': !todo.isCompleted}"></i>
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
                   </div>
               </transition-group> 
               <!-- {{ posts }} -->
               <button @click="store.dispatch('updatePost', 123)">Create Post</button>
           </div>
    </div>
</div>
</template>

<script setup>




import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { mapGetters } from 'vuex';

// import {VProgressCircular} from 'vuetify/lib'
const store =  useStore()
const completed = ref('isCompleted')

store.dispatch("getAllTodos");
const posts = computed(()=>{
    return store.getters.getPosts
})

const todos = computed(() => store.state.todos)
const sortedTodo = computed(() =>{
    return[...todos.value].sort((a,b)=> b.id - a.id)
})
const computedList = ref([...sortedTodo.value])
const filterItems = () =>{
    computedList.value = sortedTodo.value.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) )
}
const deleteTodo = (id) =>{
    store.dispatch('deleteTodo', id)
}
const completedTodo = computed(() => store.getters.completedTodo)
const unCompletedTodo = computed(() => store.getters.unCompletedTodo)

const updateTodoProperty = (id, propertyName, propertyValue) =>{
    store.dispatch('updateTodoProperty', {id, propertyName, propertyValue})
}

// const circleFill = computed(() =>{
//     return (completedTodo.value.length/todos.value.length)*100
// })
  
// const circleWidth = computed(() =>{
//     const completionPercentage = (completedTodo.value.length/todos.value.length)*100
//     return completionPercentage*2
// })
const circleColor = computed(() =>{
    const completionPercentage = (completedTodo.value.length/todos.value.length) *100
    console.log(completedTodo.value.length)
    console.log(completionPercentage)
    const greenPercentage = completionPercentage >= 100 ? 100: completionPercentage
    console.log("The green Percentage", greenPercentage)
    // return `linear-gradient(to right, #ff0000 ${greenPercentage}%, #00ff00 ${greenPercentage}%)`
    return completionPercentage >= 50 ? '#00ff00' : '#ff0000'   
})
const searchQuery = ref('')
const filterTodo = computed(() =>{
    const query = searchQuery.value.toLowerCase().trim
    console.log("Query", query)
    if(!query){
        return []
    }else{
        return store.state.todos.filter(todo => todo.title.toLowerCase().includes(query))
    }
})
const filterTodos = computed(() =>{
    if(!searchQuery.value){
        return sortedTodo.value
    } else {
        return sortedTodo.value.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    }
})
// console.log(filterTodo.value.length)
// const searchTodo = () =>{
//     console.log("perfrming search for", searchQuery.value)
//     console.log(filterTodo.value.length)
// }


const onBeforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.height = '0';
  };
  
  const onEnter = (el, done) => {
    gsap.to(el, {
      opacity: 1,
      height: '1.6em',
      delay: el.dataset.index * 0.15,
      onComplete: done
    });
  };
  
  const onLeave = (el, done) => {
    gsap.to(el, {
      opacity: 0,
      height: '0',
      delay: el.dataset.index * 0.15,
      onComplete: done
    });
  };
</script>

<style>
a{
    text-decoration:    none;
}
.border-green{
    border-left: 8px solid green;
}
.border-red{
    border-left: 5px solid red;
}
.color-green{
    color:green;
}
.color-red{
    color:red;
}
.circle{
    width: 100%;
    width: 100px;
    border: 1px solid red;
    border-radius: 50%;
    margin-top: 20px;
    border-color: transparent;
}
.green{
    background: linear-gradient(to right, #00ff00 50%, #ffffff );
}
.red{
    background: linear-gradient(to right, #ff0000 50%, #ffffff );
}
</style>

      
    