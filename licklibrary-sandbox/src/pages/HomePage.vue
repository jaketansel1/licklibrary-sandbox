<script setup>
import AppNav from '../components/AppNav.vue'
import HeroContained from '../components/HeroContained.vue'
import HeroFullWidth from '../components/HeroFullWidth.vue'
import WhySection from '../components/WhySection.vue'
import ClassicAlbumsSection from '../components/ClassicAlbumsSection.vue'
import FeaturedCourses from '../components/FeaturedCourses.vue'
import VideoSection from '../components/VideoSection.vue'
import SocialProofSection from '../components/SocialProofSection.vue'
import TutorSection from '../components/TutorSection.vue'
import SongLessonsSection from '../components/SongLessonsSection.vue'
import TechniqueLessonsSection from '../components/TechniqueLessonsSection.vue'
import FeaturedTechniqueCoursesSection from '../components/FeaturedTechniqueCoursesSection.vue'
import BackingTracksSection from '../components/BackingTracksSection.vue'
import TutorsSection from '../components/TutorsSection.vue'
import FooterSection from '../components/FooterSection.vue'

// Switch between hero versions here
// Change to 'contained' to see the split layout
// Change to 'fullwidth' to see the cinematic version
const heroVersion = 'fullwidth'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav :transparent="heroVersion === 'fullwidth'" />

    <HeroContained v-if="heroVersion === 'contained'" />
    <HeroFullWidth v-if="heroVersion === 'fullwidth'" />
    <VideoSection />

    <div class="max-w-[1320px] mx-auto px-6">
      <WhySection />
      <ClassicAlbumsSection />
      
    </div>

<FeaturedCourses />

    <SocialProofSection />

    <div class="max-w-[1320px] mx-auto px-6">
      <TutorSection />
      <SongLessonsSection />
      <TechniqueLessonsSection />
    </div>

      <FeaturedTechniqueCoursesSection />

      <div class="max-w-[1320px] mx-auto px-6">
      <BackingTracksSection />
      <TutorsSection />
    </div>

    <FooterSection />

  </div>
</template>