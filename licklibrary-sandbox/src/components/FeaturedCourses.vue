<template>
  <section class="py-16">

    <!-- Header - stays in container -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="font-heavy text-3xl">
        Featured <span class="text-brand">Classic Album</span> Guitar Courses
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

    <!-- Cards - bleeds full width to the right -->
    <div
      ref="carousel"
      class="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden -mr-6 pr-6"
      style="scroll-behavior: smooth"
    >
      <div
        v-for="course in courses"
        :key="course.id"
        class="shrink-0 w-48 cursor-pointer group"
      >
        <!-- Cover image -->
        <div class="aspect-[2/3] rounded-lg overflow-hidden mb-3">
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <!-- Card info -->
      
        <p class="text-white/80 text-sm font-medium leading-snug">{{ course.title }}</p>
        <p class="text-white/40 text-xs mt-1">{{ course.tutor }}</p>
      </div>
    </div>

    <!-- View all -->
    <div class="mt-8">
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
  { id: 1, title: 'Guns N\' Roses — Appetite for Destruction', tutor: 'Danny Gill', category: 'Classic Albums', image: '/course-1.jpg' },
  { id: 2, title: 'Pink Floyd — The Dark Side of the Moon', tutor: 'Jamie Humphries', category: 'Classic Albums', image: '/course-2.jpg' },
  { id: 3, title: 'Metallica — The Black Album', tutor: 'Andy James', category: 'Classic Albums', image: '/course-3.jpg' },
  { id: 4, title: 'Led Zeppelin — IV', tutor: 'Jamie Humphries', category: 'Classic Albums', image: '/course-4.jpg' },
  { id: 5, title: 'AC/DC — Highway to Hell', tutor: 'Danny Gill', category: 'Classic Albums', image: '/course-5.jpg' },
  { id: 6, title: 'Jimi Hendrix — Are You Experienced', tutor: 'Jamie Humphries', category: 'Classic Albums', image: '/course-6.jpg' },
  { id: 7, title: 'Black Sabbath — Paranoid', tutor: 'Andy James', category: 'Classic Albums', image: '/course-7.jpg' },
  { id: 8, title: 'Eagles — Hotel California', tutor: 'Michael Casswell', category: 'Classic Albums', image: '/course-8.jpg' },
  { id: 9, title: 'ZZ Top — Eliminator', tutor: 'Danny Gill', category: 'Classic Albums', image: '/course-9.jpg' },
  { id: 10, title: 'Ozzy Osbourne — Blizzard of Ozz', tutor: 'Andy James', category: 'Classic Albums', image: '/course-10.jpg' },
]
</script>