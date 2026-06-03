<script setup>
import AppNav from '../components/layout/AppNav.vue'
import HeroFullWidth from '../components/layout/HeroFullWidth.vue'
import WhySection from '../components/home/WhySection.vue'
import ClassicAlbumsSection from '../components/home/ClassicAlbumsSection.vue'
import FeaturedCourses from '../components/home/FeaturedCourses.vue'
import VideoSection from '../components/home/VideoSection.vue'
import SocialProofSection from '../components/home/SocialProofSection.vue'
import TutorSection from '../components/tutors/TutorSection.vue'
import SongLessonsSection from '../components/home/SongLessonsSection.vue'
import TechniqueLessonsSection from '../components/home/TechniqueLessonsSection.vue'
import FeaturedTechniqueCoursesSection from '../components/home/FeaturedTechniqueCoursesSection.vue'
import BackingTracksSection from '../components/home/BackingTracksSection.vue'
import TutorsSection from '../components/tutors/TutorsSection.vue'
import FooterSection from '../components/layout/FooterSection.vue'
import BackingTracksSlider from '../components/home/BackingTracksSlider.vue'
import PricingSection from '../components/home/PricingSection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav :transparent="true" />
    <HeroFullWidth />

    <div class="max-w-[1320px] mx-auto px-6">
      <WhySection />
      <!-- <PricingSection variant="early" /> -->
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

    <!-- <PricingSection variant="late" /> -->
    <FooterSection />
  </div>
</template>