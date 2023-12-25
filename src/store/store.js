
import axios from "axios";
import { createApp, ref } from "vue";
import Vuex from 'vuex'
const app = createApp({})
app.use(Vuex);
    const ModuleA = {
            state:{
                count: 10
            },
            mutations:{
                increment(state){
                    state.count += 2
                }
            },
            getters:{
                getCountA:(state)=>{
                    return state.count*5
                },
                getSumWithRootCountA(state, rootState){
                    return state.count + rootState.count
                }
            },
            actions:{
                increment(context){
                    setTimeout(() => {
                        context.commit('increment')
                    }, 3000);
                }
            }
           
    }
    const ModuleB = {
        state:{
            count: 2
        },
        mutations:{
            incrementB(state, payLoad){
                state.count += payLoad
            }
        },
        getters:{
            getCountB:(state) => state.count *20,
            
            getSumWithRootCountB(state, rootState){
                return state.count + rootState.count
            }
        },
        
        actions:{
            incrementB(context, payLoad){
                setTimeout(() => {
                    context.commit('incrementB', payLoad)
                }, 2000);
            }
        }
    }
export const Store = new Vuex.Store({
    modules:{
        a: ModuleA,
        b: ModuleB
    },
    state:{
        todos:[
            {id: 1, title: "GSP Exam", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 2, title: "Calculus", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 3, title: "Visiting", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
            {id: 4, title: "Get together", isCompleted: false, body: "Lorem If sif fjwfwf whfw fwbfwlbfw,mfwb"},
        ],
        myName: "Anas Maimalee",
        count: 8,
        posts: []
    },
    getters: {
        count:(state) => state.count,
        todoLength: (state) =>  state.todos.length,
        completedTodo: (state) => state.todos.filter(todo => todo.isCompleted === true),
        unCompletedTodo: (state) => state.todos.filter(todo => todo.isCompleted === false),
        getPosts: (state)=> {
            return state.posts
        }
    },
        
    mutations:{
        createTodo : (state, newTodo) =>{
            state.todos.push(newTodo)
        },
        deleteTodo: (state, payLoad) =>{
            state.todos =  state.todos.filter(todo => todo.id !== payLoad)
            console.log("Deleted Successfully")
        },
        updateTodo: (state, updatedTodo) =>{
            const index = state.todos.findIndex(todo => todo.id == updatedTodo.id)
            console.log(index)
            if(index !== -1){
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
            console.log("payload", payLoad)
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
        },
        getAllTodos(context) {
            //call API
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res=>{
                console.log(res);
                this.state.posts = res.data
            })
        },
        updatePost(context, id) {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                userId: "101",
                id: id,
                title: "Lorem",
                body: "Long describe body"
            }).then(res=>{
                console.log(res);
            })
        }
    }
})