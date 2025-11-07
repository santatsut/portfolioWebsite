<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import experiences from './data/experiences.json'

const experienceInfo = ref(experiences)
const activeIndex = ref(0)

const handleScroll = () => {
  const container = document.getElementById('contentRight')
  if (!container) return

  const children = container.children
  const windowCenter = (window.innerHeight / 2) - 350

  let closest = 0
  let smallestDistance = Infinity

  for (let i = 0; i < children.length; i++) {
    const rect = children[i].getBoundingClientRect()
    const elementCenter = rect.top + rect.height / 2
    const distance = Math.abs(windowCenter - elementCenter)
    if (distance < smallestDistance) {
      smallestDistance = distance
      closest = i
    }
  }

  activeIndex.value = closest
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="experienceContainer">
    <!-- Vertical timeline -->
    <div class="experienceLine">
      <div class="line"></div>
    </div>

    <!-- Right side content -->
    <div id="contentRight">
      <h1>Experience</h1>
      <div
        v-for="(experience, index) in experienceInfo"
        :key="experience.id"
        class="experienceItem"
        :class="{ active: index === activeIndex }"
      >
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
  align-items: stretch;
  scrollbar-width: none;
  padding-top: 20vh;
  margin-bottom: 15vh;
}

#experienceContainer::-webkit-scrollbar {
  width: 0;
}

/* === Sticky vertical timeline === */
.experienceLine {
  flex: 0.8;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
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
  pointer-events: none;
}

.experienceItem.active {
  opacity: 1 !important;
  transform: scale(1.15);
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
}

/* Titles and content spacing */
#contentRight h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.experienceItem {
  margin: 8em 0;
  width: 70%;
  opacity: 0.5;
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
