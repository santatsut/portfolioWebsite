<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import projects from './data/projects.json'

const projectList = ref(projects);

const firstTemplate = ref(null);

onMounted(() => {
  // get last item from projectList
  let lastItem = projectList.value.length - 1
  const handleScroll = () => {
    if (!firstTemplate.value) return

    const start = 900   // start fading when element is 200px from viewport top
    const duration = 700 // how many scroll px until fully faded out

    // distance scrolled since hitting the fade start
    const scrolledPast = Math.max(window.scrollY - start, 0)

    // progress goes from 1 → 0 as we scroll (clamped between 0 and 1)
    const progress = Math.max(1 - scrolledPast / duration, 0)

    firstTemplate.value.style.opacity = progress
    firstTemplate.value.style.transform = `translateY(${(1 - progress) * 50}px)`
    firstTemplate.value.style.transition = 'opacity 0.2s, transform 0.3s'
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

</script>

<template>
  <div id="parallaxContainer">
    <div class="templateBox" id="firstTemplate" ref="firstTemplate">
        <div class="card">
          <div class="leftSide">
            <h4>Seren Shop</h4>
            <ul class="techStack">
              <li>React</li>
              <li>CSS</li>
              <li>Node js</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea!</p>
          </div>
          <div class="rightSide">
            <img src="../components/images/serenShop.png" alt="">
          </div>
      </div>
    </div>
    <div class="templateBox" v-for="(project, index) in projectList" :key="index">
      <div class="card">
        <div class="leftSide">
          <h4>{{ project.title }}</h4>
          <ul class="techStack">
            <li v-for="(tech, i) in project.techStack" :key="i">{{ tech }}</li>
          </ul>
          <p>{{ project.description }}</p>
        </div>
        <div class="rightSide">
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
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
  top: 10vh;
  width: 100%;
  z-index: 1;
  margin-bottom: 50px; /* spacing between sections */
}

.card {
  width: 70vw;
  height: 60vh;
  margin: 50px auto;
  background-color: var(--cardBackground);
  border: 1px solid var(--cardBorder);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 16px;
  padding: 25px;
}

.leftSide {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.techStack {
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  font-weight: 200;
  font-size: 16px;
}

.techStack li {
  background-color: var(--cardBorder);
  padding: 5px 10px;
  border-radius: 8px;
  color: black;
}

.techStack li:hover {
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.rightSide {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.rightSide img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 16px;
}

</style>
