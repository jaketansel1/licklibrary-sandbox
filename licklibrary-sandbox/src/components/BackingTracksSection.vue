<template>
  <section class="relative py-24">

    <div class="flex items-center gap-16">

      <!-- Left: Video thumbnail -->
      <div class="flex-1.4 relative rounded-xl overflow-hidden cursor-pointer group">
        <img
          src="/backing-tracks.png"
          alt="Guitar backing tracks"
          class="w-full h-[500px] object-cover"
        />
        <!-- Play button overlay -->
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
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
// Static for now — video functionality to be added later
</script>