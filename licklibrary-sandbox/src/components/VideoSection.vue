<template>
  <section class="bg-[#0a0a0a] pt-24 pb-24 px-6">

    <!-- Headline -->
    <div class="max-w-6xl mx-auto text-center mb-10">
  <h2 class="text-5xl font-heavy leading-tight mb-4">
    30 Years Of Guitar. <span class="text-brand">One Platform.</span>
  </h2>
  <p class="text-white/50 text-m leading-relaxed">
    Built by passionate guitarists to help players learn songs, improve faster, and stay inspired.
  </p>
</div>

    <!-- Video with glow -->
    <div class="relative max-w-6xl mx-auto">

      <!-- Ambient glow behind video -->
      <div
        class="absolute -inset-4 rounded-2xl opacity-20 blur-2xl pointer-events-none"
        style="background: radial-gradient(ellipse at 50% 50%, #FF9911 0%, #7c3aed 60%, transparent 80%)"
      ></div>

      <!-- Video -->
      <div class="relative rounded-xl overflow-hidden">
        <video
          src="/coaching.mp4"
          autoplay
          muted
          loop
          controls
          playsinline
          class="w-full"
        />
      </div>

    </div>

  </section>
</template>