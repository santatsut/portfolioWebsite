<template>
    <div id="lowerSection">
      <h2 id="templateTitle">Templates</h2>
      <div id="templateArea">
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
          width="400" 
          height="400" 
          src="https://embed.figma.com/proto/o3MaBXfCKwQG7iaV6A9mnd/coffeeShop?page-id=0%3A1&node-id=1-2&p=f&viewport=471%2C2556%2C0.37&scaling=scale-down&content-scaling=fixed&embed-host=share" 
          allowfullscreen></iframe>
          <div class="templateBox">
              <img
                ref="coffeImg"
                src="../components/images/coffeShop.png"
                alt="Design Preview"
                id="coffeDesignPreview"
                draggable="false"
              />
          </div>
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
        </div>
      </div>
  
</template>

<script setup>
</script>

<style scoped>
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
</style>
