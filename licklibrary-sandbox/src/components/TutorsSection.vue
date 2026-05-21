<template>
  <section class="relative overflow-hidden min-h-[700px] flex items-center">

    <!-- Background texture -->
    <img
      src="/tutors-background.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />

    <!-- Dark overlays to blend edges -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
    <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    <div class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"></div>

    <!-- Main guitarist image — centred, bleeds up -->
    <img
      src="/tutors-guitarist.png"
      alt="Featured tutor"
      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[105%] object-contain pointer-events-none z-10"
    />
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 z-20"
  style="background: linear-gradient(to top, #0a0a0a 50%, transparent 100%);">
</div>

    <!-- Content row -->
    <div class="relative z-20 w-full flex items-center justify-between px-0 pb-0">

      <!-- Left: Text -->
      <div class="max-w-xs">
        <p class="text-brand text-xs tracking-widest uppercase mb-4">Tutors</p>
        <h2 class="font-heavy text-5xl leading-tight mb-6">
          Learn from<br>
          world-class<br>
          guitarists
        </h2>
        <p class="text-white/50 text-sm leading-relaxed mb-8">
          From beginner to advanced, get real guidance from musicians who've done it.
        </p>
        <button class="border border-white text-white text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition">
          View All Tutors
        </button>
      </div>

      <!-- Right: Portrait cards -->
      <div class="flex items-end gap-3">
        <img
          src="/tutors-cards.png"
          alt="Our tutors"
          class="h-[400px] object-contain -translate-y-8"
        />
      </div>

    </div>

  </section>
</template>

<script setup>
// Static section — no logic needed
</script>