<script setup>
import { ref } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'early'
  }
})

const isAnnual = ref(true)
</script>

<template>
  <section class="pt-20 pb-10">

    <!-- Heading -->
    <div class="text-center mb-6">
      <p class="text-brand text-xs tracking-widest uppercase mb-2">Membership</p>
      <h2 class="text-5xl font-heavy leading-tight mb-2">
        Learn Faster. <span class="text-brand">Play Better.</span>
      </h2>
      <p class="text-white/40 text-sm">14-day free trial. Cancel anytime.</p>
    </div>

    <!-- Toggle -->
    <div class="flex items-center justify-center gap-3 mb-6">
      <span :class="!isAnnual ? 'text-white' : 'text-white/40'" class="text-sm font-medium transition">Monthly</span>
      <button
        @click="isAnnual = !isAnnual"
        class="relative w-12 h-7 rounded-full transition-colors duration-300"
        :class="isAnnual ? 'bg-brand' : 'bg-white/20'"
      >
        <span
          class="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300"
:class="isAnnual ? 'translate-x-5' : 'translate-x-0'"
        ></span>
      </button>
      <span :class="isAnnual ? 'text-white' : 'text-white/40'" class="text-sm font-medium transition">
        Annual <span class="text-brand font-semibold">· Save £60/year</span>
      </span>
    </div>

    <!-- Cards -->
    <div class="flex items-stretch justify-center gap-6 max-w-xl mx-auto mb-6">

      <!-- Monthly -->
      <div
        @click="isAnnual = false"
        class="flex-1 rounded-2xl p-6 border cursor-pointer transition-all duration-300 transform"
        :class="!isAnnual
  ? 'border-brand bg-white/8 shadow-[0_0_40px_rgba(238,114,103,0.18)] scale-105'
  : 'border-white/8 bg-white/[0.02] hover:border-white/20'"
      >
        <div class="flex items-center justify-between mb-4">
          <p class="text-white/50 text-xs uppercase tracking-widest">Monthly</p>
          <div
            class="w-4 h-4 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
            :class="!isAnnual ? 'border-brand bg-brand' : 'border-white/20'"
          >
            <span v-if="!isAnnual" class="text-white text-[9px] leading-none">✓</span>
          </div>
        </div>
        <div class="flex items-end gap-1">
          <span class="text-3xl font-heavy text-white">£19.99</span>
          <span class="text-white/40 text-xs mb-1.5">/month</span>
        </div>
      </div>

      <!-- Annual -->
      <div
        @click="isAnnual = true"
        class="flex-1 rounded-2xl p-6 border cursor-pointer transition-all duration-300 relative transform"
        :class="isAnnual
  ? 'border-brand bg-white/8 shadow-[0_0_40px_rgba(238,114,103,0.18)] scale-105'
  : 'border-white/8 bg-white/[0.02] hover:border-white/20'"
      >
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-widest whitespace-nowrap">
          Best Value
        </div>
        <div class="flex items-center justify-between mb-4">
          <p class="text-white/50 text-xs uppercase tracking-widest">Annual</p>
          <div
            class="w-4 h-4 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
            :class="isAnnual ? 'border-brand bg-brand' : 'border-white/20'"
          >
            <span v-if="isAnnual" class="text-white text-[9px] leading-none">✓</span>
          </div>
        </div>
        <div class="flex items-end gap-1 mb-1">
          <span class="text-3xl font-heavy text-white">£179</span>
          <span class="text-white/40 text-xs mb-1.5">/year</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-brand text-xs font-semibold">Only £14.92/month</span>
          <div class="flex items-center gap-2">
            <span class="text-white/40 text-xs line-through">£239.98</span>
            <span class="text-white/40 text-xs">· Save £60/year</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Benefits row -->
    <div class="flex items-center justify-center gap-5 flex-wrap mb-8 max-w-3xl mx-auto">
      <div
        v-for="feature in [
          { icon: '✓', text: '10,000+ Lessons' },
{ icon: '✓', text: 'Free 1-to-1 Coaching' },
{ icon: '✓', text: '1,400+ Backing Tracks' },
{ icon: '✓', text: 'New Content Weekly' },
{ icon: '✓', text: 'Community Access' },
        ]"
        :key="feature.text"
        class="flex items-center gap-1.5 text-white/60 text-xs"
      >
        <span>{{ feature.icon }}</span>
        {{ feature.text }}
      </div>
    </div>

    <!-- CTA -->
    <div class="flex flex-col items-center gap-2">
      <button
        class="text-white font-bold px-10 py-4.5 rounded text-sm uppercase tracking-wide transition"
        style="background: linear-gradient(180deg, #2B7FE0 0%, #1660C0 100%); box-shadow: 0 0 20px rgba(26,111,212,0.3)"
      >
        Start Your 14 Day Free Trial →
      </button>
      <p class="text-white/25 text-xs">No payment today · Cancel anytime</p>
    </div>

  </section>
</template>