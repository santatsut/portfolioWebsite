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
  <templateComponent class="template-component" />
</template>

<style scoped>

#main {
  display: flex;
  flex-direction: row;
  width: 100%;  
}

#main::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  display: block;
  width: 100%;
  height: 100%;
  background-image: url('./components/images/Background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


</style>
