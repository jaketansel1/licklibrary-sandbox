<template>
  <div class="min-h-screen bg-[#0f0f0f] text-white">

    <NavBar />

    <!-- Hero -->
    <section class="px-16 pt-24 pb-16">
      <p class="text-brand text-xs tracking-widest uppercase mb-4">LickLibrary</p>
      <h1 class="font-heavy text-6xl mb-6">Learning Paths</h1>
      <p class="text-white/50 text-sm max-w-lg">
        Structured courses designed to take you from where you are to where you want to be. Pick your level and start playing.
      </p>
    </section>

    <!-- Filter Bar -->
    <section class="px-16 pb-16">
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
    </section>

    <!-- Card Grid -->
    <section class="px-16 pb-24">
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="path in filteredPaths"
          :key="path.id"
          class="bg-[#1a1a1a] rounded-xl overflow-hidden group cursor-pointer hover:bg-[#222] transition duration-200"
        >
          <!-- Thumbnail -->
          <div class="relative overflow-hidden">
            <img
              :src="path.image"
              :alt="path.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            />
            <!-- Level badge -->
            <span class="absolute top-3 left-3 text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full"
              :class="{
                'bg-green-500/20 text-green-400': path.level === 'Beginner',
                'bg-yellow-500/20 text-yellow-400': path.level === 'Intermediate',
                'bg-brand/20 text-brand': path.level === 'Advanced'
              }"
            >
              {{ path.level }}
            </span>
          </div>

          <!-- Card content -->
          <div class="p-5">
            <h3 class="font-heavy text-lg mb-1">{{ path.title }}</h3>
            <p class="text-white/40 text-xs uppercase tracking-wide mb-4">{{ path.tutor }}</p>
            <button class="border border-white/20 text-white/60 text-xs uppercase tracking-wide font-semibold px-4 py-2 hover:border-white hover:text-white transition duration-200">
              View Path
            </button>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavBar from '../components/AppNav.vue'

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced']
const activeFilter = ref('All')

const learningPaths = [
  { id: 1, title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', level: 'Beginner', image: '/learningpath-1.jpg' },
  { id: 2, title: '2 Week Technique Builder', tutor: 'Sam Bell', level: 'Beginner', image: '/learningpath-2.jpg' },
  { id: 3, title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', level: 'Intermediate', image: '/learningpath-3.jpg' },
  { id: 4, title: 'Blues Lead Guitar', tutor: 'Andy James', level: 'Intermediate', image: '/learningpath-1.jpg' },
  { id: 5, title: 'Advanced Shred Techniques', tutor: 'Andy James', level: 'Advanced', image: '/learningpath-2.jpg' },
  { id: 6, title: 'Fingerstyle Foundations', tutor: 'Various', level: 'Beginner', image: '/learningpath-3.jpg' },
]

const filteredPaths = computed(() => {
  if (activeFilter.value === 'All') return learningPaths
  return learningPaths.filter(path => path.level === activeFilter.value)
})
</script>