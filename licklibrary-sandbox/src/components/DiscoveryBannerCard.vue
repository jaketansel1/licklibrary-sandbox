<script setup>
import { useDiscovery } from '../composables/useDiscovery.js'

const {
  currentStep,
  answers,
  selectAnswer,
  toggleGenre,
  isSelected,
  nextStep,
  goBack,
  showResults,
  stepTitle,
  stepSubtitle
} = useDiscovery()
</script>

<template>
  <div class="relative shrink-0">

<!-- Ambient glow -->
<div
  class="absolute -top-6 left-1/2 -translate-x-1/2 w-2/3 h-24 pointer-events-none"
  style="background: radial-gradient(ellipse at 50% 100%, rgba(238,114,103,0.2) 0%, transparent 65%); filter: blur(20px)"
></div>

<!-- Glass card -->
<div
  class="relative rounded-xl p-10"
  style="background: linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%); backdrop-filter: blur(5px); border-top: 1.5px solid transparent; border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); border-bottom: 0px solid rgba(255,255,255,0.06); border-image: linear-gradient(to right, transparent, rgba(238,114,103,0.7) 20%, rgba(238,114,103,0.7) 80%, transparent) 1"
>    <div class="mb-6">

        <!-- Steps 2-5 -->
        <template v-if="currentStep > 1">
          <div class="flex items-center justify-between mb-4">
            <button @click="goBack" class="text-white/30 hover:text-white/60 transition text-xs">
              ← Back
            </button>
            <!-- Dots + counter -->
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5">
                <div
                  v-for="step in 5"
                  :key="step"
                  :class="step === currentStep
                    ? 'bg-brand w-4 h-1.5 rounded-full'
                    : step < currentStep
                      ? 'bg-brand/50 w-1.5 h-1.5 rounded-full'
                      : 'bg-white/20 w-1.5 h-1.5 rounded-full'"
                  class="transition-all duration-300"
                ></div>
              </div>
              <span class="text-white/20 text-xs tracking-wide">{{ currentStep }}/5</span>
            </div>
          </div>
          <h2 class="text-white font-bold text-2xl leading-tight mb-1">{{ stepTitle }}</h2>
          <p v-if="stepSubtitle" class="text-white/40 text-sm">{{ stepSubtitle }}</p>
        </template>

        <!-- Step 1 -->
        <template v-else>
          <div class="flex items-center justify-between mb-3">
            <!-- Intelligence cue -->
            <div class="flex items-center gap-1.5">
              <span class="text-brand text-xs">✦</span>
              <span class="text-brand text-xs tracking-wide">AI-powered recommendations</span>
            </div>
            <!-- Dots + counter -->
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5">
                <div
                  v-for="step in 5"
                  :key="step"
                  :class="step === currentStep
                    ? 'bg-brand w-4 h-1.5 rounded-full'
                    : step < currentStep
                      ? 'bg-brand/50 w-1.5 h-1.5 rounded-full'
                      : 'bg-white/20 w-1.5 h-1.5 rounded-full'"
                  class="transition-all duration-300"
                ></div>
              </div>
              <span class="text-white/20 text-xs tracking-wide">{{ currentStep }}/5</span>
            </div>
          </div>
          <h2 class="text-white font-bold text-2xl mb-3">{{ stepTitle }}</h2>
          <p class="text-white/40 text-sm">{{ stepSubtitle }}</p>
        </template>

      </div>

      <!-- Step 1 - Goal -->
<div v-if="currentStep === 1" class="flex items-center gap-3 flex-wrap">
  <button
    v-for="option in [
      { label: 'Learn songs I love', value: 'learn-songs' },
      { label: 'Improve faster', value: 'improve-technique' },
      { label: 'Get inspired again', value: 'get-back' },
      { label: 'Help me find where to start', value: 'exploring' }
    ]"
    :key="option.value"
    @click="selectAnswer('goal', option.value)"
    :class="answers.goal === option.value
      ? 'border-brand text-white bg-brand scale-105'
      : 'border-white/15 text-white/80 bg-white/10 hover:border-brand hover:text-white hover:bg-brand'"
    class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
  >
    {{ option.label }}
  </button>
</div>

<!-- Step 2 - Level -->
<div v-if="currentStep === 2" class="flex items-center gap-3 flex-wrap">
  <button
    v-for="option in [
      { label: 'Just starting out', value: 'beginner' },
      { label: 'Getting there', value: 'intermediate' },
      { label: 'Pretty advanced', value: 'advanced' },
      { label: 'Honestly not sure', value: 'not-sure' }
    ]"
    :key="option.value"
    @click="selectAnswer('level', option.value)"
    :class="answers.level === option.value
      ? 'border-brand text-white bg-brand scale-105'
      : 'border-white/15 text-white/60 bg-white/10 hover:border-brand hover:text-white hover:bg-brand'"
    class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
  >
    {{ option.label }}
  </button>
</div>

<!-- Step 3 - Genres -->
<div v-if="currentStep === 3">
  <div class="flex items-center gap-3 flex-wrap mb-6">
    <button
v-for="genre in ['Classic Rock', `80's Rock`, 'Rock', 'Blues', 'Metal', 'Acoustic', 'Country', 'Fusion', 'Jazz', 'Pop']"      :key="genre"
      @click="toggleGenre(genre)"
      :class="isSelected(genre)
        ? 'border-brand text-white bg-brand scale-105'
        : 'border-white/15 text-white/60 bg-white/10 hover:border-brand hover:text-white hover:bg-brand'"
      class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
    >
      {{ genre }}
    </button>
  </div>
  <div class="flex justify-end">
    <button
      @click="nextStep"
      :disabled="answers.genres.length === 0"
      :class="answers.genres.length === 0
        ? 'bg-white/10 text-white/30 cursor-not-allowed'
        : 'bg-brand hover:bg-brand/90 text-white cursor-pointer'"
      class="text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
    >
      Next →
    </button>
  </div>
</div>

<!-- Step 4 - Time -->
<div v-if="currentStep === 4" class="flex items-center gap-3 flex-wrap">
  <button
    v-for="option in [
      { label: 'Short sessions, 30–60 mins', value: 'little' },
      { label: 'A few hours a week', value: 'few-hours' },
{ label: `I'm fully committed`, value: 'committed' }    ]"
    :key="option.value"
    @click="selectAnswer('time', option.value)"
    :class="answers.time === option.value
      ? 'border-brand text-white bg-brand scale-105'
      : 'border-white/15 text-white/80 bg-white/10 hover:border-brand hover:text-white hover:bg-brand'"
    class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
  >
    {{ option.label }}
  </button>
</div>

<!-- Step 5 - Artists -->
<div v-if="currentStep === 5">
  <input
    v-model="answers.artists"
    type="text"
    placeholder="e.g. Hendrix, Clapton, SRV, Metallica…"
    class="w-full bg-white/10 border border-white/15 text-white placeholder-white/50 text-sm px-5 py-3.5 rounded-full mb-6 focus:outline-none focus:border-brand transition-all duration-200"
  />
  <div class="flex justify-end">
    <button @click="showResults" class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200">
      Show my recommendations →
    </button>
  </div>
</div>

    </div>
  </div>
</template>