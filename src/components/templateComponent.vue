<script setup>
</script>

<template>
  <div id="parallaxContainer">
    <div class="templateBox" id="firstTemplate">
      <div class="card">First Template</div>
    </div>
    <div class="templateBox" id="secondTemplate">
      <div class="card">
        <div :class="leftSide">
          <h1>Title</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!</h3>
        </div>
        <div class="rightSide">
          <img src="../components/images/cleanWaveBg.png" alt="">
        </div>
      </div>
    </div>
    <div class="templateBox" id="thirdTemplate">
      <div class="card">Third Template</div>
    </div>
  </div>
</template>

<style scoped>
#parallaxContainer {
  width: 100%;
  height: 300vh; /* enough height to scroll naturally */
  padding-top: 200px;
}

.templateBox {
  position: sticky;
  top: 15vh;
  width: 100%;
  z-index: 1;
  margin-bottom: 50px; /* spacing between sections */
}

.card {
  width: 80vw;
  height: 50vh;
  margin: 50px auto;
  background-color: #444;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 16px;
}
</style>
