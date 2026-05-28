<script setup>
import AppNav from '../components/AppNav.vue'
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
import BackingTracksSlider from '../components/BackingTracksSlider.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav :transparent="true" />
    <HeroFullWidth />

    <div class="max-w-[1320px] mx-auto px-6">
      <WhySection />
    </div>

    <VideoSection />

    <div class="max-w-[1320px] mx-auto px-6">
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
      <BackingTracksSlider />
      <TutorsSection />
    </div>

    <FooterSection />
  </div>
</template>