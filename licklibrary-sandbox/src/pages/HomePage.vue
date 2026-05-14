<script setup>
import AppNav from '../components/AppNav.vue'
import HeroSection from '../components/HeroSection.vue'
import WhySection from '../components/WhySection.vue'
import ClassicAlbumsSection from '../components/ClassicAlbumsSection.vue'
import FeaturedCourses from '../components/FeaturedCourses.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav />
    <div class="max-w-[1320px] mx-auto px-6">
      <HeroSection />
      <WhySection />
      <ClassicAlbumsSection />
      <FeaturedCourses />
    </div>
  </div>
</template>