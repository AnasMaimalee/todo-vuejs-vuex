
import { createApp, ref } from "vue";
import Vuex from 'vuex'
const app = createApp({})
app.use(Vuex);

export const Store = new Vuex.Store({
    state:{
        todos:[
            {id: 1, title: "Project 1", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 2, title: "Project 2", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 3, title: "Project 3", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 4, title: "Project 4", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
        ],
        
        
    },
    getters: {
        todoLength: (state) =>  state.todos.length
    },

    mutations:{
        createTodo : (state, newTodo) =>{
            console.log(newTodo.id + "  created")
            state.todos.push(newTodo)
        },
        deleteTodo: (state, payLoad) =>{
            state.todos =  state.todos.filter(todo => todo.id !== payLoad)
        },
        updateTodo: (state, updatedTodo) =>{
            console.log("mutations...")
            const index = state.todos.findIndex(todo => todo.id == updatedTodo.id)
            console.log(index)
            if(index !== -1){
                console.log(index)
                console.log(updatedTodo)
                console.log("index.....")
                state.todos.splice(index,1, updatedTodo)
            }else{
                console.log("record not found")
            }
        }
    },

    actions:{
        createTodo:(context ,newTodo) =>{
            context.commit('createTodo', newTodo)
        },
        deleteTodo: (context, payLoad)=>{
            setTimeout(() => {
                context.commit('deleteTodo', payLoad)
            }, 2000);
        },
        updateTodoProperty:({state}, { id, getOwnPropertyNames, propertyValue}) =>{
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if(todoToUpdate){
                todoToUpdate['isCompleted'] =! todoToUpdate['isCompleted']
            }
        },
        updateTodo: (context, updatedTodo)=>{
            console.log("actions....")
            context.commit('updateTodo', updatedTodo)
            console.log("lea...")
        }
    }
})