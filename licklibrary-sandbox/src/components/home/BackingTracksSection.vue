<template>
  <section class="relative py-24">

    <div class="flex items-center gap-16">

      <!-- Left: Video -->
<div class="w-[60%] relative rounded-xl overflow-hidden cursor-pointer group">        <video
          src="/backing-tracks.mp4"
          autoplay
          muted
          loop
          playsinline
          class="w-full h-[500px] object-cover"
        ></video>
      </div>

      <!-- Right: Text content -->
      <div class="flex-1">
        <p class="text-brand text-xs tracking-widest uppercase mb-4">Backing Tracks</p>
        <h2 class="font-heavy text-5xl leading-tight mb-6">
          Over 1,500<br>
          Studio-Quality<br>
          Guitar <span class="text-brand">Backing<br>Tracks</span>
        </h2>
        <p class="text-white/50 text-sm leading-relaxed mb-8">
          Jam, improvise and practise in every style. From song-specific tracks to open jam sessions — play with a real band feel.
        </p>
        <button class="border border-white text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
          Explore Backing Tracks
        </button>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>