<template>
  <div class="container flex flex-col justify-center items-center min-h-screen">
      <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input 
      v-model="email"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="enter email">
        <p v-if="emailError" class="text-red-500 text-xs italic">{{emailError}}</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input 
      v-model="password"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
       <p v-if="passwordError" class="text-red-500 text-xs italic">{{passwordError}}</p>
    </div>
    <div class="flex items-center justify-between">
      <button @click="handleSubmit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
 
</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    setup(){
      const store=useStore()
      const router= useRouter()
        const email=ref('')
        const password=ref('')
        const emailError=ref(null)
        const passwordError=ref(null)
        const handleSubmit=()=>{
            if(email.value.length<0){
                emailError.value="Please enter an email"
            }
             else if(password.value.length<6){
                passwordError.value="Please enter atleast 6 characters"
            }else{
                try {
                  emailError.value=null
                  passwordError.value=null
                  store.dispatch('signIn',{email:email.value,password:password.value})
                  password.value=''
                  email.value=''
                  router.push('/')

                } catch (error) {
                  error.value=error
                }
            }
           
            
        }

        return{
            email,
            password,
            handleSubmit,
            passwordError,
            emailError
        }
    }

}
</script>

<style>

</style>