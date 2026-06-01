<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DiscoveryBannerCard from '../components/DiscoveryBannerCard.vue'
import DiscoveryBannerLight from '../components/DiscoveryBannerLight.vue'
import DiscoveryBannerCardV2 from '../components/DiscoveryBannerCardV2.vue'
import DiscoveryBannerCardV3 from '../components/DiscoveryBannerCardV3.vue'

// Switch banner version: 'card', 'light', 'card-v2', 'card-v3'
const bannerVersion = 'card-v3'

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

    <!-- Card scrim -->
    <div class="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
      style="background: linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)">
    </div>

    <!-- Content -->
    <div
  class="relative z-10 max-w-[1320px] mx-auto w-full px-12 flex flex-col pt-24 lg:pt-48 pb-12 lg:pb-20"
  :class="(bannerVersion === 'bottom-dock' || bannerVersion === 'card-v2') ? 'justify-start pt-48 2xl:pt-64' : 'justify-start'"
>

      <p class="opacity-0 animate-fadein text-brand text-xs tracking-widest uppercase mb-5"
        style="animation-delay: 200ms">
        Est. 1992
      </p>

      <h1 class="opacity-0 animate-fadein text-7xl font-heavy leading-none mb-4"
        style="animation-delay: 300ms">
        Play More Guitar.<br>
        <span class="text-brand">Stay Inspired.</span>
      </h1>

      <p class="opacity-0 animate-fadein text-white/60 text-base leading-relaxed"
        :class="bannerVersion === 'card-v3' ? 'mb-10' : 'mb-12'"
        style="animation-delay: 500ms">
        Learn from world-class tutors. 10,000+ lessons.<br>
        Free 1-to-1 coaching.
      </p>

      <button
        v-if="bannerVersion === 'card-v3'"
        class="opacity-0 animate-fadein self-start text-white text-base font-semibold px-12 py-5 transition mb-8"
        style="animation-delay: 650ms; background: linear-gradient(180deg, #2B7FE0 0%, #1660C0 100%); box-shadow: 0 0 24px rgba(26,111,212,0.35), inset 0 1px 0 rgba(255,255,255,0.15); border-radius: 6px;"
      >
        Start Your 14 Day FREE Trial →
      </button>

      

      <DiscoveryBannerCard v-if="bannerVersion === 'card'" />
      <DiscoveryBannerLight v-else-if="bannerVersion === 'light'" />
      <DiscoveryBannerCardV2 v-else-if="bannerVersion === 'card-v2'" />
      <DiscoveryBannerCardV3
        v-else-if="bannerVersion === 'card-v3'"
        class="opacity-0 animate-fadein "
        style="animation-delay: 1000ms"
      />

    </div>

  </section>
</template>