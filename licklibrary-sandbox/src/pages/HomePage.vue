<script setup>
import AppNav from '../components/AppNav.vue'
import HeroContained from '../components/HeroContained.vue'
import HeroFullWidth from '../components/HeroFullWidth.vue'
import WhySection from '../components/WhySection.vue'
import ClassicAlbumsSection from '../components/ClassicAlbumsSection.vue'
import FeaturedCourses from '../components/FeaturedCourses.vue'
import VideoSection from '../components/VideoSection.vue'

// Switch between hero versions here
// Change to 'contained' to see the split layout
// Change to 'fullwidth' to see the cinematic version
const heroVersion = 'fullwidth'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav :transparent="heroVersion === 'fullwidth'" />

    <!-- Hero sits OUTSIDE the container so fullwidth can bleed edge to edge -->
    <HeroContained v-if="heroVersion === 'contained'" />
    <HeroFullWidth v-if="heroVersion === 'fullwidth'" />
    <VideoSection />

    <!-- Everything else stays contained -->
    <div class="max-w-[1320px] mx-auto px-6">
      <WhySection />
      <ClassicAlbumsSection />
      <FeaturedCourses />
    </div>
  </div>
</template>