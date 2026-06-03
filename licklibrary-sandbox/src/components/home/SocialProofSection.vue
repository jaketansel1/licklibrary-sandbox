<template>
  <section class="relative py-24 px-6" style="background: radial-gradient(ellipse 600px 500px at 15% 45%, #0e4f6e 0%, #0a0a0a 60%);">

    

    <!-- Content: z-10 keeps it above the glow -->
    <div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Left: Heading + Stats -->
      <div>
        <h2 class="text-5xl font-heavy text-white leading-tight mb-6">
          Trusted By Over<br />
          3 Million Guitarists<br />
          <span class="text-brand">Worldwide</span>
        </h2>

        <p class="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
          From first-time beginners to seasoned shredders, our community spans every corner of the globe. Real progress, real people, real results.
        </p>

        <!-- Stats -->
        <div class="flex gap-16">
          <div>
            <p class="text-6xl font-heavy text-brand">3M+</p>
            <p class="text-gray-400 mt-1">Guitarists Worldwide</p>
          </div>
          <div>
            <p class="text-6xl font-heavy text-white">10K+</p>
            <p class="text-gray-400 mt-1">Lessons</p>
          </div>
        </div>
      </div>

      <!-- Right: Testimonial Card -->
      <div class="bg-white/5 rounded-2xl p-6">

        <!-- Label -->
        <p class="text-brand text-xs font-bold tracking-widest uppercase mb-4">Shaun's Story</p>

        <!-- Video Thumbnail -->
        <div class="relative rounded-xl overflow-hidden mb-6 cursor-pointer group">
          <img
  src="/social.jpg"
  alt="Shaun playing guitar"
  class="w-full h-56 object-cover"
/>
          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Quote -->
        <p class="text-white text-lg italic leading-relaxed mb-6">
          "I'm playing stuff I could have only dreamt of performing before joining. The structured approach changed everything for me."
        </p>

        <!-- Person + Arrows -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
              alt="Shaun Stevens"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p class="text-white font-semibold text-sm">Shaun Stevens</p>
              <p class="text-gray-500 text-xs">USA</p>
            </div>
          </div>

          <!-- Navigation arrows (static for now) -->
          <div class="flex gap-2">
            <button class="w-9 h-9 rounded-lg bg-white/10 text-gray-400 flex items-center justify-center hover:bg-brand hover:text-white transition-colors duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button class="w-9 h-9 rounded-lg bg-white/10 text-gray-400 flex items-center justify-center hover:bg-brand hover:text-white transition-colors duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed yet — prototype stage
// Later: add testimonials array, currentIndex ref, and prev/next functions
</script>