<template>
  <section class="py-16">

    <!-- Heading -->
    <div class="text-center mb-10">
      <p class="text-brand text-xs tracking-widest uppercase mb-3">Why LickLibrary</p>
      <h2 class="font-heavy text-5xl mb-4">A Guitar Learning Experience You<br>Won't Find Anywhere Else</h2>
      <p class="text-white/50 text-sm">Master songs, get real feedback, and connect with guitarists worldwide.</p>
    </div>

    <!-- Three cards -->
    <div class="grid grid-cols-3 gap-4">

      <!-- Classic Albums card -->
      <div class="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group">
        <img src="/classic-albums.png" alt="Classic Albums" class="w-full h-full object-cover absolute inset-0 scale-100 group-hover:scale-105 transition duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div class="absolute bottom-0 left-0 right-0 px-8 z-10 transition-transform duration-500 group-hover:-translate-y-10">
          <h3 class="text-white font-bold text-2xl mb-1">Classic Albums</h3>
          <p class="text-white/60 text-sm mb-3">Learn iconic albums</p>
          <div class="w-8 h-0.5 bg-brand"></div>
          <button class="mt-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/50 text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black">
            Explore Albums →
          </button>
        </div>
      </div>

      <!-- 1-2-1 Coaching card -->
      <div class="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group">
        <video autoplay muted loop playsinline class="w-full h-full object-cover absolute inset-0 scale-100 group-hover:scale-105 transition duration-500">
          <source src="/coaching.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div class="absolute bottom-0 left-0 right-0 px-8 z-10 transition-transform duration-500 group-hover:-translate-y-10">
          <h3 class="text-white font-bold text-2xl mb-1">1-2-1 Coaching</h3>
          <p class="text-white/60 text-sm mb-3">Get real tutor feedback</p>
          <div class="w-8 h-0.5 bg-blue-500"></div>
          <button class="mt-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/50 text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black">
            Book a session →
          </button>
        </div>
      </div>

      <!-- Community card -->
      <div class="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group">
        <img src="/community.png" alt="Community" class="w-full h-full object-cover absolute inset-0 scale-100 group-hover:scale-105 transition duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div class="absolute bottom-0 left-0 right-0 px-8 z-10 transition-transform duration-500 group-hover:-translate-y-10">
          <h3 class="text-white font-bold text-2xl mb-1">Community</h3>
          <p class="text-white/60 text-sm mb-3">Join a serious guitar community</p>
          <div class="w-8 h-0.5 bg-yellow-500"></div>
          <button class="mt-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/50 text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black">
            Join community →
          </button>
        </div>
      </div>

    </div>

  </section>
</template>