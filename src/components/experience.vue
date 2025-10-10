<script setup>
import { ref, onMounted } from 'vue'
import experiences from './data/experiences.json'

const experienceInfo = ref(experiences)
const experienceLine = ref(null)
const contentRight = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio === 1) {
        contentRight.value.classList.add('active')
        experienceContainer.value.classList.add('active')
      } else {
        contentRight.value.classList.remove('active')
      }
    },
    { threshold: 1.0 }
  )

  observer.observe(experienceLine.value)
})
</script>

<template>
  <div id="experienceContainer" ref="experienceContainer">
    <div class="experienceLine" ref="experienceLine">
      <div class="line"></div>
    </div>

    <div id="contentRight" ref="contentRight">
      <h1>Experience</h1>
      <div v-for="experience in experienceInfo" :key="experience.id" class="experienceItem">
        <h2>{{ experience.year }} – {{ experience.role }} at {{ experience.company }}</h2>
        <p>{{ experience.details }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* === Outer container handles scrolling === */
#experienceContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 70vh;
  scrollbar-width: none;
  padding-top: 20vh;
}

#experienceContainer::-webkit-scrollbar {
  width: 0;
}

/* === Sticky vertical timeline === */
.experienceLine {
  flex: 0.8;
  position: sticky;
  top: 10vh;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  background-color: white;
  height: 70vh;
  width: 3px;
  border-radius: 10px;
  position: sticky;
  top: 10vh;
}

/* Top & bottom dots */
.line::before,
.line::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
}

.line::before {
  top: 0;
}

.line::after {
  bottom: 0;
}

/* === Right side content === */
#contentRight {
  flex: 2;
  color: white;
  padding-left: 5vw;
  opacity: 0.4;
  pointer-events: none;
  transform: translateY(4vh);
  transition: opacity 0.6s ease, transform 0.8s ease;
}

/* unlock when the line is fully visible */
#contentRight.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  overflow-y: auto;
}

/* Titles and content spacing */
#contentRight h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.experienceItem {
  margin-bottom: 3rem;
}

.experienceItem h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.experienceItem p {
  width: 70%;
  line-height: 1.6;
  font-weight: 300;
}
</style>
