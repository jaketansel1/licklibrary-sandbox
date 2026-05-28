<template>
  <section class="py-0">

    <!-- Header -->
    <div class="w-full">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-heavy text-3xl">
  Featured Guitar <span class="text-brand">Backing Tracks</span>
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
    <div class="overflow-hidden">
      <div
        ref="carousel"
        class="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="track in tracks"
          :key="track.id"
          class="shrink-0 w-72 cursor-pointer group"
        >
          <div class="aspect-video rounded-lg overflow-hidden mb-3">
            <img
              :src="track.image"
              :alt="track.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <p class="text-white/80 text-sm font-medium leading-snug">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-1">{{ track.artist }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const carousel = ref(null)

function scrollLeft() {
  carousel.value.scrollBy({ left: -600, behavior: 'smooth' })
}

function scrollRight() {
  carousel.value.scrollBy({ left: 600, behavior: 'smooth' })
}

const tracks = [
  { id: 1, title: 'White Wedding Backing Track', artist: 'Billy Idol', image: '/hero-artist_Billy_Idol.jpg' },
  { id: 2, title: 'Smooth Backing Track', artist: 'Carlos Santana', image: '/hero-artist_Carlos_Santana.jpg' },
  { id: 3, title: 'Hungry Like The Wolf Backing Track', artist: 'Duran Duran', image: '/hero-artist_Duran_Duran.jpg' },
  { id: 4, title: 'Surfing With The Alien Backing Track', artist: 'Joe Satriani', image: '/hero-artist_Joe_Satriani.jpg' },
  { id: 5, title: 'In The End Backing Track', artist: 'Linkin Park', image: '/hero-artist_Linkin_Park.jpg' },
  { id: 6, title: 'Heart Of Gold Backing Track', artist: 'Neil Young', image: '/hero-artist_Neil_Young.jpg' },
  { id: 7, title: 'Sweet Child O\' Mine Backing Track', artist: 'Slash', image: '/hero-artist_Slash.jpg' },
  { id: 8, title: 'Roxanne Backing Track', artist: 'Sting', image: '/hero-artist_Sting.jpg' },
  { id: 9, title: 'Tribute Backing Track', artist: 'Tenacious D', image: '/hero-artist_Tenacious_D.jpg' },
  { id: 10, title: 'Zombie Backing Track', artist: 'The Cranberries', image: '/hero-artist_The_Cranberries.jpg' },
]
</script>