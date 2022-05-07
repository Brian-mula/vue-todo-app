<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <header class="flex flex-col container w-2/3">
      <h3 class="font-8xl p-6 font-thin text-gray-800 text-center">
        My Todo List
      </h3>
     <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
      >New Todo</label
    >
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleText0"
      placeholder="Enter a new Todo"
      v-model="newTodo"
      @change="addTodo"
    />
  </div>
</div>
    </header>
    <main class="container mt-5">
      <section class="" v-if="pending.length > 0">
        <h3 class="text-3xl font-thin text-red-600 m-5 text-center">
          Pending Tasks : {{pending.length}}
        </h3>
        <ul>
          <li 
          v-for="todo in pending" :key="todo.id"
          class="bg-white rounded-xl px-4 py-4 text-center hover:bg-red-500 hover:text-white cursor-pointer transition duration-1000 mb-4"
          @click="changeStatus(todo.id)"
          >
            {{todo.text}}
          </li>
        </ul>
      </section>
      <section v-if="completed.length > 0">
        <h3 class="text-3xl font-thin text-green-800 m-5 text-center">
          Completed Tasks : {{completed.length}}
        </h3>
        <ul>
          <li
          v-for="todo in completed" :key="todo.id"
            class="bg-white mb-4 rounded-xl px-4 py-4 text-center hover:bg-green-800 hover:text-white cursor-pointer transition duration-1000"
          >
            {{todo.text}}
          </li>
        </ul>
      </section>
      
    </main>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup(){
    const todos=ref([])
    const newTodo=ref('')
    const pending=computed(()=>{
      return todos.value.filter(todo=>todo.status==='pending')
    })
    const completed=computed(()=>{
      return todos.value.filter(todo=>todo.status=='complete')
    })
    const changeStatus=id=>{
      todos.value.map(todo=>{
        if(todo.id==id){
          todo.status=todo.status==='pending'?"complete":"done"
        }
      })
    }
    const addTodo=()=>{
      if(newTodo.value.length>0){
        todos.value.push({
          id:todos.value.length,
          text:newTodo.value,
          status:'pending'

        })
      newTodo.value=""
      }
    }
    return{
      todos,
      pending,
      completed,
      changeStatus,
      newTodo,
      addTodo
    }
  }
};
</script>
