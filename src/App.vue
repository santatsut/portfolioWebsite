<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sideBar from './components/sideBar.vue'
import HomeView from './views/HomeView.vue';

</script>

<template>
  <div id="main">
    <sideBar />
    <RouterView />
  </div>
</template>

<style scoped>
#main {
  display: flex;
<<<<<<< HEAD
  flex-direction: row;
=======
  width: 100%;
>>>>>>> 189c8336d96f3aa53ffa810a6908b7cfe7be3289
}
</style>
