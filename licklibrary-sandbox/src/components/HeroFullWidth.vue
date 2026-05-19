<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DiscoveryBanner from './DiscoveryBanner.vue'

const images = ['/hero.png', '/hero2.png']
const activeImage = ref(0)

let interval

onMounted(() => {
  interval = setInterval(() => {
    activeImage.value = (activeImage.value + 1) % images.length
  }, 7000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="relative flex flex-col w-full min-h-screen">

    <!-- Background image -->
    <img
  v-for="(image, index) in images"
  :key="image"
  :src="image"
  alt="Hero"
  class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
  :class="index === activeImage ? 'opacity-100' : 'opacity-0'"
  style="object-position: center 15%"
/>

    <!-- Dark gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10"></div>

    <!-- Bottom fade to page background -->
<div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-[1320px] mx-auto w-full px-12 flex flex-col justify-center pt-32" style="height: 100vh">
      <p class="text-brand text-xs tracking-widest uppercase mb-5">Est. 1992</p>
      <h1 class="text-7xl font-heavy leading-none mb-6">
        Play More Guitar.<br>
        <span class="text-brand">Stay Inspired.</span>
      </h1>
      <p class="text-white/60 text-base leading-relaxed mb-8">
        Learn from world-class tutors. 10,000+ lessons.<br>
        Free 1-to-1 coaching.
      </p>
      <DiscoveryBanner />
    </div>

  </section>
</template>