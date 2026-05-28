<template>
  <section class="py-0">

    <!-- Header -->
    <div class="max-w-[1320px] mx-auto px-6 w-full">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-heavy text-3xl">
          Featured <span class="text-brand">Guitar Technique</span> Courses
        </h2>
        <div class="flex items-center gap-2">
          <button @click="scrollLeft" class="w-8 h-8 border border-white/20 hover:border-white/50 text-white/70 hover:text-white flex items-center justify-center transition">
            ‹
          </button>
          <button @click="scrollRight" class="w-8 h-8 border border-white/20 hover:border-white/50 text-white/70 hover:text-white flex items-center justify-center transition">
            ›
          </button>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="max-w-[1320px] mx-auto px-6 overflow-hidden">
      <div
        ref="carousel"
        class="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="course in courses"
          :key="course.id"
          class="shrink-0 w-52 cursor-pointer group"
        >
          <div class="aspect-[2/3] rounded-lg overflow-hidden mb-3">
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <p class="text-white/80 text-sm font-medium leading-snug">{{ course.title }}</p>
          <p class="text-white/40 text-xs mt-1">{{ course.tutor }}</p>
        </div>
      </div>
    </div>

    <!-- View all -->
    <div class="max-w-[1320px] mx-auto px-6 mt-8">
      <button class="border border-white text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
  View All Courses
</button>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const carousel = ref(null)

function scrollLeft() {
  carousel.value.scrollBy({ left: -500, behavior: 'smooth' })
}

function scrollRight() {
  carousel.value.scrollBy({ left: 500, behavior: 'smooth' })
}

const courses = [
  { id: 1, title: 'Shred Fusion', tutor: 'Francesco Fareri', image: '/course-1.jpg' },
  { id: 2, title: 'Rock Rhythm Guitar', tutor: 'Danny Gill', image: '/course-2.jpg' },
  { id: 3, title: 'Virtuoso Concepts', tutor: 'Tom Quayle', image: '/course-3.jpg' },
  { id: 4, title: 'Playing Like A Singer', tutor: 'Michael Casswell', image: '/course-4.jpg' },
  { id: 5, title: 'Guitar Gym Vol. 3', tutor: 'Sam Bell', image: '/course-5.jpg' },
  { id: 6, title: 'Mastering Modes', tutor: 'Andy James', image: '/course-6.jpg' },
  { id: 7, title: 'Metal Rhythm Vol. 4', tutor: 'Sam Bell', image: '/course-7.jpg' },
  { id: 8, title: 'Technical Patterns', tutor: 'Francesco Fareri', image: '/course-8.jpg' },
  { id: 9, title: 'Phrasing & Expression', tutor: 'Michael Casswell', image: '/course-9.jpg' },
  { id: 10, title: 'Lead Guitar Mastery', tutor: 'Andy James', image: '/course-10.jpg' },
]
</script>