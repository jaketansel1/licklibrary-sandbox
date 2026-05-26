<template>
  <div class="min-h-screen bg-[#080808] text-white">

    <NavBar />

    <!-- Hero -->
    <section class="relative px-16 pt-24 pb-4 overflow-hidden min-h-[420px] flex items-center">

      <div class="absolute inset-0 flex justify-end pointer-events-none">
        <img
          src="/learning-paths-hero.png"
          alt=""
          class="h-full w-[70%] object-cover object-center opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-2xl">
        <p class="text-brand text-xs tracking-widest uppercase mb-5">Structured Guitar Learning</p>
        <h1 class="font-heavy text-6xl leading-tight mb-6">Learning Paths</h1>
        <p class="text-white/50 text-sm max-w-2xl leading-relaxed mb-10">
          Whether you're a beginner, intermediate or advanced guitar player, Licklibrary's Learning Paths can help you reach your playing goals, with an accelerated, hands-on study plan. You'll play your way through the entire curriculum - no reading music, no boring exercises, no tedious theory to struggle through! The Learning Paths will first help you assess your current level of play, and then present you with a personalized curriculum of video lessons presented by Licklibrary's world-class guitar educators. Ready to get started? Pick your Learning Path and dig in now!
        </p>

        <div class="flex gap-3">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-5 py-2 text-xs uppercase tracking-wide font-semibold border transition duration-200',
              activeFilter === filter
                ? 'bg-brand border-brand text-white'
                : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

    </section>

    <!-- Card Grid -->
<section class="px-16 pt-12 pb-24">
  <div class="grid grid-cols-3 gap-10">
    <PathCard
      v-for="path in filteredPaths"
      :key="path.id"
      :path="path"
    />
  </div>
</section>

  </div>
</template>

<script setup>
import PathCard from '../components/PathCard.vue'
import { ref, computed } from 'vue'
import NavBar from '../components/AppNav.vue'

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced']
const activeFilter = ref('All')

const learningPaths = [
  {
    id: 1,
    title: '2 Week Scales Bootcamp',
    tutor: 'Various Tutors',
    level: 'Beginner',
    genre: 'Rock',
    image: '/learningpath-1.jpg',
    description: 'A systematic journey through the essential scales every guitarist needs. From basic pentatonic positions through to major and minor scales — all designed to boost your scale knowledge in just two weeks.'
  },
  {
    id: 2,
    title: '2 Week Technique Builder',
    tutor: 'Sam Bell',
    level: 'Beginner',
    genre: 'Rock',
    image: '/learningpath-2.jpg',
    description: 'Strengthen your picking and fretting hand technique with focused workouts and exercises. Noticeable results in just two weeks — the fast track your technique needs.'
  },
  {
    id: 3,
    title: '10 Classic Rock Songs in 10 Days',
    tutor: 'Rich Shaw',
    level: 'Intermediate',
    genre: 'Rock',
    image: '/learningpath-3.jpg',
    description: 'Learn ten essential classic rock songs every guitarist should know. Covers the chords, techniques and scales behind each song with a helpful structured guide.'
  },
  {
    id: 4,
    title: 'Blues Lead Guitar',
    tutor: 'Andy James',
    level: 'Intermediate',
    genre: 'Blues',
    image: '/learningpath-1.jpg',
    description: 'Dive deep into the language of blues lead guitar. Learn the phrases, bends and feel that define the genre — with Andy James as your guide.'
  },
  {
    id: 5,
    title: 'Advanced Shred Techniques',
    tutor: 'Andy James',
    level: 'Advanced',
    genre: 'Metal',
    image: '/learningpath-2.jpg',
    description: 'Push your technical limits with advanced shred concepts including sweep picking, alternate picking and legato runs — all broken down at a learnable pace.'
  },
  {
    id: 6,
    title: 'Fingerstyle Foundations',
    tutor: 'Various Tutors',
    level: 'Beginner',
    genre: 'Acoustic',
    image: '/learningpath-3.jpg',
    description: 'Build a solid fingerstyle technique from the ground up. Perfect for players wanting to move beyond the pick and unlock a new dimension of guitar playing.'
  },
]

const filteredPaths = computed(() => {
  if (activeFilter.value === 'All') return learningPaths
  return learningPaths.filter(path => path.level === activeFilter.value)
})
</script>