<script setup>
import { RouterLink, RouterView } from 'vue-router'
import sideBar from './components/sideBar.vue'
import HomeView from './views/HomeView.vue';
import templateComponent from './components/templateComponent.vue';

</script>

<template>
  <div id="main">
    <sideBar />
    <HomeView />
  </div>
  <templateComponent />
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: row;
  width: 100%;
}

</style>
