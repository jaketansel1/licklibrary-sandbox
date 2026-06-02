<script setup>
import AppNav from '../components/AppNav.vue'

const tutors = [
  { name: 'Danny Gill', slug: 'danny-gill', genre: 'Rock · Blues', lessons: 187, courses: 24, featured: true, image: '/tutors/hero-tutor_Danny_Gill' },
  { name: 'Sam Bell', slug: 'sam-bell', genre: 'Metal · Fusion', lessons: 214, courses: 18, featured: true, image: '/tutors/hero-tutor_Sam_Bell' },
  { name: 'Dave Kilminster', slug: 'dave-kilminster', genre: 'Rock · Progressive', lessons: 156, courses: 12, featured: true, image: '/tutors/hero-tutor_Dave_Kilminster' },
  { name: 'Andy James', slug: 'andy-james', genre: 'Metal · Shred', lessons: 98, courses: 9, featured: false, image: '/tutors/hero-tutor_Andy_James' },
  { name: 'Carl Verheyen', slug: 'carl-verheyen', genre: 'Rock · Blues', lessons: 74, courses: 6, featured: false, image: '/tutors/hero-tutor_Carl_Verheyen' },
  { name: 'Tom Quayle', slug: 'tom-quayle', genre: 'Fusion · Jazz', lessons: 112, courses: 11, featured: false, image: '/tutors/hero-tutor_Tom_Quayle' },
  { name: 'Rich Shaw', slug: 'rich-shaw', genre: 'Metal · Rock', lessons: 89, courses: 8, featured: false, image: '/tutors/hero-tutor_Rich_Shaw' },
  { name: 'Stuart Bull', slug: 'stuart-bull', genre: 'Rock · Technique', lessons: 203, courses: 21, featured: false, image: '/tutors/hero-tutor_Stuart_Bull' },
  { name: 'Chris Buck', slug: 'chris-buck', genre: 'Blues · Rock', lessons: 65, courses: 7, featured: false, image: '/tutors/hero-tutor_Chris_Buck' },
  { name: 'Dave Brons', slug: 'dave-brons', genre: 'Acoustic · Fingerstyle', lessons: 54, courses: 5, featured: false, image: '/tutors/hero-tutor_Dave_Brons' },
  { name: 'Guthrie Govan', slug: 'guthrie-govan', genre: 'Fusion · Rock', lessons: 91, courses: 10, featured: false, image: '/tutors/hero-tutor_Guthrie_Govan' },
  { name: 'Levi Clay', slug: 'levi-clay', genre: 'Jazz · Fusion', lessons: 67, courses: 6, featured: false, image: '/tutors/hero-tutor_Levi_Clay' },
]
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav />

    <!-- Page header — contained -->
    <div class="max-w-[1320px] mx-auto px-6">
      <div class="pt-32 pb-12 border-b border-white/10">
        <p class="text-[#EE7267] text-xs tracking-widest uppercase mb-4">World-class instructors</p>
        <h1 class="text-6xl font-heavy leading-tight mb-4">
          Learn from the<br>
          <span class="text-[#EE7267]">best in the business.</span>
        </h1>
        <p class="text-white/40 text-base max-w-lg leading-relaxed">
          38 professional guitarists, recording artists and educators — each with their own style, story and approach to teaching.
        </p>
      </div>
    </div>

    <!-- Cards will go here — full width -->

    <!-- Featured tutors -->
<div class="px-6 mt-12">
  <p class="text-white/30 text-xs tracking-widest uppercase mb-6">Featured tutors</p>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="tutor in tutors.filter(t => t.featured)"
      :key="tutor.slug"
      class="relative overflow-hidden cursor-pointer group"
      style="aspect-ratio: 16/9"
    >
      <img
        :src="tutor.image + '.jpg'"
        :alt="tutor.name"
        class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-5">
        <p class="text-[#EE7267] text-xs tracking-widest uppercase mb-1">{{ tutor.genre }}</p>
        <p class="text-white font-bold text-xl mb-1">{{ tutor.name }}</p>
      </div>
    </div>
  </div>
</div>

    <!-- Divider -->
<div class="border-t border-white/7 mx-6 my-10"></div>

<!-- All tutors grid -->
<div class="px-6">
  <p class="text-white/30 text-xs tracking-widest uppercase mb-6">All tutors — {{ tutors.length }} instructors</p>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="tutor in tutors"
      :key="tutor.slug"
      class="relative overflow-hidden cursor-pointer group"
      style="aspect-ratio: 16/9"
    >
      <img
        :src="tutor.image + '.jpg'"
        :alt="tutor.name"
        class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>

      <!-- Hover label -->
      <div class="absolute top-3 right-3 bg-[#EE7267] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide opacity-0 group-hover:opacity-100 transition duration-200">
        View →
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-4">
        <p class="text-[#EE7267] text-xs tracking-widest uppercase mb-1">{{ tutor.genre }}</p>
        <p class="text-white font-semibold text-sm mb-1">{{ tutor.name }}</p>
      </div>
    </div>
  </div>
</div>

  </div>
</template>