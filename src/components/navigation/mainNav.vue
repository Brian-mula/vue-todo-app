<template>
  <template v-if="isAuthenticated">
    <div class="flex flex-row py-6 bg-blue-800 text-white font-thin">
      <div class="mx-4">
        <router-link to="/" class="flex hover:bg-blue-500 rounded-md p-3">
          <span class="pr-3 las la-tasks "></span>
          <span>Todos</span>
        </router-link>
      </div>
      <div class="mx-4">
        <router-link
          to="/history"
          class="flex hover:bg-blue-500 hover:text-black rounded-md p-3"
        >
          <span class="pr-3 las la-history"></span>
          <span>History</span>
        </router-link>
      </div>
      <div v-if="user" class=" flex mx-4 ml-auto">
        <div>
          <router-link to="/profile" class="flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg"
              alt=""
              class="h-10 w-10 rounded-full"
            />
            <span class="pl-3">User</span>
          </router-link>
        </div>
        <div>
          <button @click="handleLogout" class="inline pl-3 items-center mt-2">
            <span class="pl-3 las la-arrow-left"></span>
            <span class="">Logout</span>
          </button>
        </div>
      </div>
      <div class="flex mx-4 ml-auto" v-if="!user">
        <div>
          <router-link to="/signIn" class="flex justify-center items-center">
            <span class="las la-lock"></span>
            <span class="pl-3">Login</span>
          </router-link>
        </div>
        <div>
          <router-link to="/signUp" class="flex justify-center items-center">
            <span class="pl-3 las la-lock"></span>
            <span class="pl-3">Register</span>
          </router-link>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const handleLogout=()=>{
      store.dispatch('logout')
    }
    return {
      user: computed(() => store.state.user),
      isAuthenticated: computed(() => store.state.isAuthenticated),
      handleLogout
    };
  },
};
</script>

<style></style>
