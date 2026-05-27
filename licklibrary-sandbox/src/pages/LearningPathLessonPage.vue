<template>
  <div class="min-h-screen bg-[#080808] text-white">

    <NavBar />

    <!-- Video player -->
<section class="bg-black">
  <div class="mx-auto w-full max-w-[1320px]">
    <div class="relative aspect-video bg-black group">

      <video
        ref="videoRef"
        src="/coaching.mp4"
        class="w-full h-full object-cover"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoaded"
        @ended="isPlaying = false"
      />

      <!-- Controls overlay -->
      <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">

        <!-- Progress bar -->
        <div class="px-6 pb-3">
          <input
            type="range"
            min="0"
            :max="duration"
            :value="currentTime"
            @input="seek"
            class="w-full h-1 accent-secondary cursor-pointer"
          />
        </div>

        <!-- Buttons row -->
        <div class="flex items-center justify-between px-6 pb-5">

          <!-- Left: play/pause + time -->
          <div class="flex items-center gap-4">
            <button @click="togglePlay" class="text-white hover:text-secondary transition">
              <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </button>
            <span class="text-white/60 text-xs font-mono">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
          </div>

          <!-- Right: fullscreen -->
          <button @click="toggleFullscreen" class="text-white hover:text-secondary transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>

        </div>
      </div>

      <!-- Big play button when paused -->
      <div
        v-if="!isPlaying"
        @click="togglePlay"
        class="absolute inset-0 flex items-center justify-center cursor-pointer"
      >
        <div class="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center hover:bg-secondary transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

    </div>
  </div>
</section>

    <!-- Lesson info + progress + nav -->
<section class="border-b border-white/5">
  <div class="mx-auto w-full max-w-[1320px] px-8 py-6">

    <div class="flex items-start justify-between gap-8">

      <!-- Left: title + progress -->
      <div class="flex flex-col gap-3">
        <div>
          <h1 class="font-heavy text-3xl text-white">1. Introduction</h1>
          <p class="text-white/40 text-sm mt-1">Shred Ninja — Sweep Picking Challenge</p>
        </div>
        <div class="flex items-center gap-4 pt-2">
          <span class="text-white/40 text-xs uppercase tracking-wide">1 of 31 lessons</span>
          <span class="text-secondary text-xs uppercase tracking-wide font-semibold">3% Complete</span>
        </div>
        <div class="w-140 h-1.5 bg-white/10 overflow-hidden">
          <div class="h-full bg-secondary" style="width: 3%"></div>
        </div>
      </div>

      <!-- Right: icons row + nav row -->
      <div class="flex flex-col items-end gap-8 flex-shrink-0">

        

        <!-- Nav buttons -->
  <div class="flex items-center gap-3">
    <button class="border border-white/20 text-white/60 text-xs uppercase tracking-wide font-semibold px-5 py-3 hover:bg-white/90 hover:text-black/90 transition duration-200">
      Previous
    </button>
    <button class="border border-white/20 text-white/60 text-xs uppercase tracking-wide font-semibold px-5 py-3 hover:bg-white/90 hover:text-black/90 transition duration-200">
      Complete Lesson
    </button>
    <button class="bg-secondary text-white text-xs uppercase tracking-wide font-semibold px-6 py-3 hover:brightness-110 transition duration-200">
      Next Lesson  →
    </button>
  </div>

 <!-- Resource icons -->
  <div class="flex items-center gap-3">
    <button class="w-14 h-14 bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/>
      </svg>
    </button>
    <button class="w-14 h-14 bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white">
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
      </svg>
    </button>
    <button class="w-14 h-14 bg-white/10 flex items-center justify-center hover:bg-white/20 transition duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
    </button>
  </div>

</div>

    </div>

  </div>
</section>

    

    <!-- Related paths -->
    <section class="py-24">
      <div class="mx-auto w-full max-w-[1320px] px-8">
        <div class="mb-12">
          <p class="text-secondary text-xs tracking-widest uppercase mb-3">Keep Learning</p>
          <h2 class="font-heavy text-4xl text-white">Other Learning Paths You Might Like</h2>
        </div>
        <div class="grid grid-cols-3 gap-10">
          <PathCard v-for="path in relatedPaths" :key="path.id" :path="path" />
        </div>
      </div>
    </section>

    <FooterSection />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/AppNav.vue'
import PathCard from '../components/PathCard.vue'
import FooterSection from '../components/FooterSection.vue'

const videoRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

function togglePlay() {
  if (isPlaying.value) {
    videoRef.value.pause()
  } else {
    videoRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

function onTimeUpdate() {
  currentTime.value = videoRef.value.currentTime
}

function onLoaded() {
  duration.value = videoRef.value.duration
}

function seek(e) {
  videoRef.value.currentTime = e.target.value
}

function toggleFullscreen() {
  videoRef.value.requestFullscreen()
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

const currentWeekId = 1



const relatedPaths = [
  {
    id: 2,
    title: '2 Week Technique Builder',
    tutor: 'Sam Bell',
    level: 'Beginner',
    genre: 'Rock',
    image: '/learningpath-2.jpg',
    description: 'Strengthen your picking and fretting hand technique.'
  },
  {
    id: 3,
    title: '10 Classic Rock Songs in 10 Days',
    tutor: 'Rich Shaw',
    level: 'Intermediate',
    genre: 'Rock',
    image: '/learningpath-3.jpg',
    description: 'Learn ten essential classic rock songs every guitarist should know.'
  },
  {
    id: 4,
    title: 'Blues Lead Guitar',
    tutor: 'Andy James',
    level: 'Intermediate',
    genre: 'Blues',
    image: '/learningpath-1.jpg',
    description: 'Dive deep into the language of blues lead guitar.'
  },
]
</script>