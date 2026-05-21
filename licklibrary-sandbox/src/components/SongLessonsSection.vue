<template>
  <section class="relative py-24 overflow-hidden">

    <div class="flex items-center gap-16">

      <!-- Left: Text content -->
      <div class="flex-1">
        <p class="text-brand text-xs tracking-widest uppercase mb-4">Song Lessons</p>
        <h2 class="font-heavy text-5xl leading-tight mb-6">
          Learn 1,800+<br>
          <span class="text-brand">Iconic Guitar</span><br>
          Songs
        </h2>
        <p class="text-white/50 text-sm leading-relaxed mb-4">
          Across rock, blues, metal & more
        </p>
        <p class="text-white/50 text-sm leading-relaxed mb-8">
          Step-by-step breakdowns from riffs to full solos. Slow it down, isolate parts, and play along.
        </p>
        <button class="border border-white text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
          Explore All Songs
        </button>
      </div>

      <!-- Right: Album collage (bigger than Classic Albums version) -->
      <div class="flex-[1.1] grid grid-cols-4 grid-rows-4 gap-2">

        <!-- Featured card -->
        <div
          :key="albumSets[currentSet].featured.id"
          class="album-card col-span-2 row-span-2 rounded overflow-hidden"
          style="--delay: 0ms"
        >
          <img :src="albumSets[currentSet].featured.src" alt="Featured album" class="w-full h-full object-cover" />
        </div>

        <!-- Small cards -->
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

function getColumnDelay(index) {
  const colMap = [2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1]
  const col = colMap[index] ?? index % 4
  return col * 120
}
</script>

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