<script setup>
import { onMounted, ref } from 'vue';
import templateComponent from '../components/templateComponent.vue';
import TemplateComponent from '../components/templateComponent.vue';

const coffeImg = ref(null);

onMounted(() => {
  const img = coffeImg.value;
  if (!img) return;

  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  const container = img.parentElement;

  container.style.cursor = 'grab';

  container.addEventListener('pointerdown', (e) => {
    isDragging = true;
    container.setPointerCapture(e.pointerId);
    container.style.cursor = 'grabbing';
    startX = e.clientX - img.offsetLeft;
    startY = e.clientY - img.offsetTop;
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;
    img.style.left = offsetX + 'px';
    img.style.top = offsetY + 'px';
  });

  container.addEventListener('pointerup', (e) => {
    isDragging = false;
    container.releasePointerCapture(e.pointerId);
    container.style.cursor = 'grab';
  });
});
</script>


<template>
  <div>
    <!-- Top Section -->
    <div id="topSection">
      <div id="background">
        <div id="outerCircle">
          <div id="innerCircle"></div>
        </div>
      </div>
      <!-- Flex container for left + right -->
      <div id="topContent">
        <div id="leftSection">
          <div id="homeMain">
            <div id="titleText">
              <h1>Student 18</h1>
              <h1>Web Developer</h1>
              <h5 id="proText">Website Projects</h5>
            </div>
            <div id="squares4">
              <div class="bentoBox">
                <h3>ArtStudy</h3>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus sunt distinctio accusamus explicabo. Sint vel consequuntur fugiat fuga eos.</h5>
              </div>
              <div class="bentoBox">
                <h3>budo club</h3>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus sunt distinctio accusamus explicabo. Sint vel consequuntur fugiat fuga eos.</h5>
              </div>
              <div class="bentoBox">
                <h3>Project in progress...</h3>
              </div>
              <div class="bentoBox">
                <h3>Project in progress...</h3>
              </div>
              <button class="bentoBox" id="designTemplates">
                <h3>Website Design Templates</h3>
                <div id="arrowDown"></div>
              </button>
            </div>
          </div>
        </div>

      <div id="rightSection">
          <div class="bentoBox" id="skillBox">
            <h3>Skills</h3>
            <ul class="skillsList">
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Problemsolving</li>
            </ul>
            <h3>Programming Languages</h3>
            <ul class="skillsList">
              <li>React</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div class="bentoBox" id="shortText">
            <h3>Web Developer</h3>
            <p>Web developer with a passion for creating dynamic and responsive websites. Skilled in HTML, CSS, and JavaScript, with a focus on user experience and accessibility. Eager to contribute to innovative projects and collaborate with teams to deliver high-quality web solutions.</p>
          </div>
        </div>
      </div>
    </div>
    </div> 

    <!-- Lower Section -->
    

</template>

<style>

#topSection {
  position: relative;
  width: 100%;
}

#topContent {
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
}

#templateTitle {
  color: black;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  letter-spacing: 3px;
}

#templateArea {
  display: flex;
  gap: 20px;
}

.templateBox {
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid #ccc;
  cursor: grab;
}

#coffeDesignPreview {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: auto;
}

#lowerSection {
  width: 100%;
  margin: 50px;
  height: 800px;
}

#background {
  position: absolute;
  margin-left: 23%;
  width: 50%;
}

#outerCircle {
  position: inherit;
  width: 800px;
  height: 800px;
  background: linear-gradient(0.4turn, #B531E2, #33043C 50%);
  border-radius: 50%;
  z-index: -5;
}

#innerCircle {
  position: absolute;
  width: 640px;
  height: 640px;
  background: #F0F0F0;
  border-radius: 50%;
  justify-self: center;
  margin-top: 80px;
}

#homeMain {
  margin: 50px 100px 0 100px;
}

#squares4 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 225px;
  column-gap: 50px;
  row-gap: 30px;
  width: 500px;
  margin: 0px;
  padding: 0px;
}

.bentoBox {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: #F0F0F0;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.bentoBox h3 {
  margin: 0;
}

.bentoBox h5 {
  font-family: 'Times New Roman', Times, serif;
  font-size: small;
  margin: 25px;
}

#designTemplates {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #F0F0F0;
  width: 100%;
  height: 75px;
  margin-top: 30px;
  border: none;
  font-size: 20px;
  letter-spacing: 0.3cap;
  font-weight: 300;
  padding: 10px;
  grid-column: 1 / -1;
}

#arrowDown {
  margin-top: 10px;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #F0F0F0;
}

h1 {
  color: black;
  font-weight: 350;
  margin: 0;
  padding: 0;
}

#proText {
  color: black;
  margin: 25px 0 10px 0;
}

#rightSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-left: 300px;
}

#skillBox {
  position: relative;
  width: 100%;
  height: 50vh;
  margin: 25px;
}

#skillSection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  position: relative;
  margin-top: 50px;
  list-style: none;
  column-gap: 50px;
  row-gap: 30px;
  max-width: 400px;
}

#skillBox h3 {
  margin: 25px;
  font-weight: 400;
  text-decoration: underline;
}

.skillsList {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 25px;
  font-weight: 300;
  font-size: 16px;
  list-style-type: none;
  text-align: left;
  padding: 0;
  margin: 0;
}
#skillsList li {
  text-align: left;
}

#shortText {
  position: relative;
  width: 100%;
  margin: 25px;
  height: 275px;
}
</style>
