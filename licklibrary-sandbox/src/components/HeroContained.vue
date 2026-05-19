<script setup>
import DiscoveryBanner from './DiscoveryBanner.vue'
</script>

<template>
  <section class="flex flex-col pt-6 pb-8 max-w-[1320px] mx-auto px-6">

    <!-- Top row -->
    <div class="flex items-center gap-12 py-10 min-h-0">

      <!-- Left: text -->
      <div class="flex-[1]">
        <p class="text-brand text-xs tracking-widest uppercase mb-5">Est. 1992</p>
        <h1 class="text-7xl font-heavy leading-none mb-6">
          Play More Guitar.<br>
          <span class="text-brand">Stay Inspired.</span>
        </h1>
        <p class="text-white/60 text-base leading-relaxed">
          Learn from world-class tutors. 10,000+ lessons.<br>
          Free 1-to-1 coaching.
        </p>
      </div>

      <!-- Right: video -->
      <div class="relative flex-[1.2]">
        <div class="rounded-xl cursor-pointer group overflow-hidden relative aspect-video">
          <img src="/sam-thumbnail.png" alt="Video thumbnail" class="w-full h-full object-cover absolute inset-0" />
          <div class="relative z-10 w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span class="text-white text-2xl ml-1">▶</span>
          </div>
        </div>
      </div>

    </div>

    <DiscoveryBanner />

  </section>
</template>