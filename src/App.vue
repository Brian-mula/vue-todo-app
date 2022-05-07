<template>
  <div class="nav">
    <main-nav/>
</div>
  <div class="bg-gray-300">
    
    <router-view/>
  </div>
</template>

<script>
import mainNav from './components/navigation/mainNav.vue'

export default {
components:{
  mainNav,
  
}
}
</script>

<style>

</style>