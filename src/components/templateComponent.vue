<script setup>
import { onMounted, ref } from 'vue';

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
    <div id="lowerSection">
      <h2 id="templateTitle">Templates</h2>
      <div id="templateArea">
          <div class="templateBox">
              <img
                ref="coffeImg"
                src="../components/images/coffeShop.png"
                alt="Design Preview"
                id="coffeDesignPreview"
                draggable="false"
              />
          </div>
          <div class="templateBox"></div>
          <div class="templateBox"></div>
          <div class="templateBox"></div>
          <div class="templateBox"></div>
          <div class="templateBox"></div>

          <!--
            <iframe style="border: 2px solid rgba(0, 0, 0, 0.5);" 
            width="400" 
            height="400" 
            src="https://embed.figma.com/design/o3MaBXfCKwQG7iaV6A9mnd/coffeeShop?node-id=0-1&embed-host=share" 
            allowfullscreen></iframe>
            <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="400" 
            height="400" 
            src="https://embed.figma.com/proto/jmid9XrYNYwW6pRpahZWoy/Portfolio-page?page-id=0%3A1&node-id=6-3&p=f&viewport=106%2C669%2C0.28&scaling=scale-down&content-scaling=fixed&embed-host=share" 
            allowfullscreen></iframe>
          -->
        </div>
    </div>
  
</template>


<style scoped>
#lowerSection {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
  position: relative;
}

#templateTitle {
  color: black;
  text-align: center;
  justify-self: center;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  letter-spacing: 10px;
  padding: 0;
  width: 50%;
  font-size: 62px;
  color: #F0F0F0;
}

#templateArea {
  display: flex;
  gap: 20px;
  width: 80vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0;
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
  user-drag: node;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: auto;
}


</style>
