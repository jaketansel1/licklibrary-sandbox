<template>
  <section class="relative bg-[#0a0a0a] overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center min-h-[600px] gap-24">

      <!-- Left: Image with fade -->
      <div class="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] flex-shrink-0">
        <img
          src="/your-tutors.png"
          alt="Your guitar tutor"
          class="w-full h-full object-cover object-center"
        />
        
        <!-- Fade to dark on the bottom edge (for mobile) -->
        <div class="absolute inset-0" style="background: linear-gradient(to bottom, transparent 60%, #0a0a0a 100%);"></div>
      </div>

      <!-- Right: Text content -->
      <div class="relative z-10 w-full lg:w-1/2 px-8 lg:px-12 py-16 ">
        <p :class="[props.accentColor, 'text-xs font-bold tracking-widest uppercase mb-4']">1-2-1 Coaching</p>

        <h2 class="text-5xl font-heavy text-white leading-tight mb-6">
          Your One-To-One<br />
          <span :class="props.accentColor">Guitar Tutor</span>
        </h2>

        <p class="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
          Stuck on a riff? Struggling with chords? Get free personal coaching with a pro tutor via Zoom.
        </p>

        <p class="text-gray-500 text-base">Live feedback. Real progress.</p>
      </div>

    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  accentColor: {
    type: String,
    default: 'text-brand'
  }
})
</script>