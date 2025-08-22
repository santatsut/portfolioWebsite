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
  flex-direction: row;
}
</style>
