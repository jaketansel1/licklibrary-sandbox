<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const albumSets = [
  {
    featured: { id: 'big-1', src: '/big-album.jpg' },
    covers: Array.from({ length: 12 }, (_, i) => ({ id: i + 1, src: `/album-${i + 1}.jpg` }))
  },
  {
    featured: { id: 'big-2', src: '/big-album2.jpg' },
    covers: Array.from({ length: 12 }, (_, i) => ({ id: i + 13, src: `/album-${i + 13}.jpg` }))
  }
]

const currentSet = ref(0)
let interval = null

function rotateAlbums() {
  currentSet.value = currentSet.value === 0 ? 1 : 0
}

onMounted(() => {
  interval = setInterval(rotateAlbums, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

// The grid is 4 columns
// Featured card occupies cols 0-1, rows 0-1
// Small cards fill the remaining spots left to right
// We assign each small card its actual column in the grid
function getColumnDelay(index) {
  // First 2 small cards are in cols 2 and 3 (row 0)
  // Next 4 are cols 0,1,2,3 (row 2)
  // Next 4 are cols 0,1,2,3 (row 3)
  // Last 2 are... etc
  // Simplest accurate mapping:
  const colMap = [2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1]
  const col = colMap[index] ?? index % 4
  return col * 120
}
</script>

<template>
  <section class="relative overflow-hidden" style="min-height: 700px">

    <img src="/classic-albums-bg.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    <img src="/classic-albums-guitarist.png" alt="" class="absolute bottom-[-20px] left-1/2 -translate-x-1/2 h-full object-contain pointer-events-none z-20" />

    <div class="relative z-10 flex items-center gap-16 py-28">

      <div class="flex-1">
        <p class="text-brand text-xs tracking-widest uppercase mb-4">Classic Albums</p>
        <h2 class="font-heavy text-5xl leading-tight mb-6">
          Learn Guitar<br>
          Lessons For<br>
          <span class="text-brand">Classic Albums</span>
        </h2>
        <p class="text-white/50 text-sm leading-relaxed mb-8">
          Each Classic Album course breaks down an entire album — riff by riff, solo by solo —
          exactly as it was recorded.
        </p>
        <button class="border border-white text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
          Explore Classic Albums
        </button>
      </div>

      <div class="flex-[0.8]"></div>

      <div class="flex-[1.2] grid grid-cols-4 grid-rows-4 gap-2 z-10">

        <!-- Featured card — col 0, delay 0ms -->
        <div
          :key="albumSets[currentSet].featured.id"
          class="album-card col-span-2 row-span-2 rounded overflow-hidden"
          style="--delay: 0ms"
        >
          <img :src="albumSets[currentSet].featured.src" alt="Featured album" class="w-full h-full object-cover" />
        </div>

        <!-- Small cards — each mapped to its actual column -->
        <template v-for="(cover, index) in albumSets[currentSet].covers" :key="cover.id">
          <div
            class="album-card rounded overflow-hidden aspect-square"
            :style="`--delay: ${getColumnDelay(index)}ms`"
          >
            <img :src="cover.src" :alt="`Album ${cover.id}`" class="w-full h-full object-cover" />
          </div>
        </template>

      </div>

    </div>

  </section>
</template>

<style scoped>
.album-card {
  animation: fadeSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--delay);
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>