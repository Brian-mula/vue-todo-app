<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <div class="bg-gray-300">
      <div class="container flex justify-center py-20">
        <div class="p-3 bg-white rounded-xl max-w-lg hover:shadow">
          <div class="flex justify-between w-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg"
              width="150"
              class="rounded-lg"
            />

            <div class="ml-2">
              <div class="p-3">
                <h3 class="text-2xl">Email: {{ user.email }}</h3>
                <span>Status: Logged in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
};
</script>

<style></style>
