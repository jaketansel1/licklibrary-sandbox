<template>
  <div class="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 z-50">

    <!-- Tab bar -->
    <div class="flex items-center gap-10 px-16 border-b border-white/10">
      <button
        v-for="tab in tabs"
        :key="tab"
        @mouseenter="activeTab = tab"
        class="py-4 text-sm font-medium transition duration-200 border-b-2 -mb-px"
        :class="activeTab === tab
          ? 'text-white border-brand'
          : 'text-white/40 border-transparent hover:text-white/70'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content area -->
    <div class="flex px-16 py-12 gap-20">

      <!-- Left: Browse + Genre links -->
      <div class="w-48 shrink-0">
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
        <ul class="space-y-3 mb-8">
          <li v-for="link in currentTab.browseLinks" :key="link">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
          </li>
        </ul>
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Genre</p>
        <ul class="space-y-3">
          <li v-for="genre in currentTab.genres" :key="genre">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ genre }}</a>
          </li>
        </ul>
      </div>

      <!-- Divider -->
      <div class="w-px bg-white/10 shrink-0"></div>

      <!-- Right: Featured cards -->
      <div class="flex-1">
        <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>

        <!-- Portrait layout -->
        <div v-if="currentTab.layout === 'portrait'" class="flex gap-4 overflow-hidden">
          <div
  v-for="(course, index) in currentTab.featured"
  :key="course.title"
  class="w-42 shrink-0 cursor-pointer group"
  :class="index === 5 ? 'hidden 2xl:block' : ''"
>
            <div class="rounded-lg overflow-hidden mb-3">
              <img
                :src="course.image"
                :alt="course.title"
                class="w-full aspect-[2/3] max-h-64 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <p class="text-white text-xs font-semibold leading-snug">{{ course.title }}</p>
            <p class="text-white/40 text-xs mt-1">{{ course.tutor }}</p>
          </div>
        </div>

        <!-- Landscape layout -->
        <div v-else class="flex flex-row gap-6">
          <div
            v-for="course in currentTab.featured"
            :key="course.title"
            class="flex-1 cursor-pointer group"
          >
            <div class="rounded-lg overflow-hidden mb-3">
              <img
                :src="course.image"
                :alt="course.title"
                class="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <p class="text-white text-sm font-semibold leading-snug mb-1">{{ course.title }}</p>
            <p class="text-white/40 text-xs">{{ course.tutor }}</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('New')

const tabs = ['New', 'Classic Albums', 'Technique', 'Song Courses', 'Beginners', 'Learning Paths', 'Licks', 'Most Watched']

const tabContent = {
  'New': {
    layout: 'portrait',
    browseLinks: ['All New Courses', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', '80s', 'Blues'],
    featured: [
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
      { title: 'Are You Experienced', tutor: 'Danny Gill', image: '/course-2.jpg' },
      { title: 'Dr. Feelgood', tutor: 'Danny Gill', image: '/course-3.jpg' },
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
      { title: 'Hotel California', tutor: 'Danny Gill', image: '/course-5.jpg' },
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
    ]
  },
  'Classic Albums': {
    layout: 'portrait',
    browseLinks: ['All Classic Albums', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', 'Blues', 'Pop'],
    featured: [
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
      { title: 'Metallica - The Black Album', tutor: 'Jamie Humphries', image: '/course-7.jpg' },
      { title: '5150', tutor: 'Sam Bell', image: '/course-8.jpg' },
      { title: 'Machine Head', tutor: 'Danny Gill', image: '/course-9.jpg' },
      { title: 'The Number Of The Beast', tutor: 'Danny Gill', image: '/course-10.jpg' },
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
    ]
  },
  'Learning Paths': {
    layout: 'landscape',
    browseLinks: ['All Learning Paths', 'Latest', 'Most Popular'],
    genres: ['Beginner', 'Intermediate', 'Advanced'],
    featured: [
      { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', image: '/learningpath-1.jpg' },
      { title: '2 Week Technique Builder', tutor: 'Sam Bell', image: '/learningpath-2.jpg' },
      { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', image: '/learningpath-3.jpg' },
    ]
  }
}

const currentTab = computed(() => {
  return tabContent[activeTab.value] || tabContent['New']
})
</script>