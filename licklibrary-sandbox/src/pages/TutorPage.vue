<script setup>
import AppNav from '../components/AppNav.vue'

const tutor = {
  name: 'Sam Bell',
  slug: 'sam-bell',
  genre: ['Metal', 'Fusion', 'Technique'],
  tagline: 'A versatile guitarist covering blues, rock, metal and fusion, helping players develop technique, feel, and their own style.',
  bio: 'Sam Bell has been playing guitar from the age of 4. A member of UK tech-metal band Mask of Judas, he is also currently writing his own solo instrumental album. He also writes for Guitar Interactive Magazine and creates lesson material for LickLibrary.',
  stats: [
    { label: 'Lessons', value: '214' },
    { label: 'Courses', value: '18' },
    { label: 'Students', value: '9k+' },
  ],
  image: '/tutors/hero-tutor_Sam_Bell.jpg'
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav />

    <!-- Hero -->
    <div class="relative w-full" style="height: 70vh">

      <!-- Background image -->
      <img
        :src="tutor.image"
        :alt="tutor.name"
        class="absolute inset-0 w-full h-full object-cover object-top"
      />

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

      <!-- Hero content -->
      <div class="relative h-full flex flex-col justify-end pb-16 px-12">
        <div class="max-w-2xl">

          <!-- Genre tags -->
          <div class="flex gap-2 mb-5">
            <span
              v-for="tag in tutor.genre"
              :key="tag"
              class="text-xs font-medium uppercase tracking-widest px-3 py-1 border border-white/20 text-white/60"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Name -->
          <h1 class="text-7xl font-bold leading-none mb-5">
            {{ tutor.name }}
          </h1>

          <!-- Tagline -->
          <p class="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            {{ tutor.tagline }}
          </p>

          <!-- CTA -->
          <button class="text-white text-sm font-bold px-8 py-4 uppercase tracking-widest" style="background: linear-gradient(180deg, #2B7FE0 0%, #1660C0 100%)">
            Start Learning
          </button>

        </div>
      </div>
    </div>

    <!-- Tab nav -->
<div class="border-b border-white/10 px-12">
  <div class="flex gap-8">
    <button
      v-for="tab in ['About', 'Lessons', 'Courses', 'Livestreams', 'Performances']"
      :key="tab"
      class="text-sm font-semibold py-5 uppercase tracking-widest transition border-b-2 -mb-px"
      :class="tab === 'About' ? 'text-white border-[#EE7267]' : 'text-white/30 border-transparent hover:text-white/60'"
    >
      {{ tab }}
    </button>
  </div>
</div>

    <!-- Bio section -->
    <div class="max-w-[1320px] mx-auto px-12 py-20">
      <div class="grid grid-cols-3 gap-16">

        <!-- Stats -->
        <div class="flex flex-col gap-8 border-r border-white/10 pr-16">
          <div v-for="stat in tutor.stats" :key="stat.label">
            <p class="text-5xl font-bold text-white mb-1">{{ stat.value }}</p>
            <p class="text-white/40 text-sm uppercase tracking-widest">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Bio text -->
        <div class="col-span-2">
          <p class="text-[#EE7267] text-xs tracking-widest uppercase mb-4">About Danny</p>
          <p class="text-white/70 text-lg leading-relaxed">{{ tutor.bio }}</p>
        </div>

      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-white/10 mx-12"></div>

  </div>
</template>