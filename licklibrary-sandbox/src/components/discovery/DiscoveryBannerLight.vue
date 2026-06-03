<script setup>
import { useDiscovery } from '../../composables/useDiscovery.js'

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
    <div class="relative rounded-xl px-8 py-6 bg-[#F3EFEA] shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-2xl"

      <!-- Header row -->
      <div class="flex items-center mb-2">
        <div class="flex items-center gap-1.5">
          <span class="text-brand text-xs">✦</span>
          <span class="text-brand text-xs tracking-wide">AI-powered recommendations</span>
        </div>
       
      </div>

      <!-- Back button -->
      <button v-if="currentStep > 1" @click="goBack" class="text-black/30 hover:text-black/60 transition text-xs mb-1">
        ← Back
      </button>

      <!-- Title -->
      <h2 class="text-black font-bold text-2xl mb-1">{{ stepTitle }}</h2>
      <p v-if="stepSubtitle" class="text-black/40 text-sm mb-5">{{ stepSubtitle }}</p>

      <!-- Step 1 -->
      <div v-if="currentStep === 1" class="flex items-center gap-3 flex-wrap mt-4">
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
            ? 'border-brand text-white bg-brand'
            : 'border-black/15 text-black/70 bg-white hover:bg-brand hover:border-brand hover:text-white/90'"
          class="border text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
        >
          {{ option.label }}
        </button>
      </div>

      <!-- Step 2 -->
      <div v-if="currentStep === 2" class="flex items-center gap-3 flex-wrap mt-4">
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
            ? 'border-brand text-white bg-brand'
            : 'border-black/15 text-black/70 bg-white hover:bg-brand hover:border-brand hover:text-white/90'"
          class="border text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
        >
          {{ option.label }}
        </button>
      </div>

      <!-- Step 3 -->
      <div v-if="currentStep === 3" class="mt-4">
        <div class="flex items-center gap-3 flex-wrap mb-5">
          <button
            v-for="genre in ['Classic Rock', `80's Rock`, 'Rock', 'Blues', 'Metal', 'Acoustic', 'Country', 'Fusion', 'Jazz', 'Pop']"
            :key="genre"
            @click="toggleGenre(genre)"
            :class="isSelected(genre)
              ? 'border-brand text-white bg-brand'
              : 'border-black/15 text-black/70 bg-white hover:bg-brand hover:border-brand hover:text-white/90'"
            class="border text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
          >
            {{ genre }}
          </button>
        </div>
        <div class="flex justify-end">
          <button
            @click="nextStep"
            :disabled="answers.genres.length === 0"
            :class="answers.genres.length === 0 ? 'bg-black/10 text-black/30 cursor-not-allowed' : 'bg-brand hover:bg-brand/90 text-white'"
            class="text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            Next →
          </button>
        </div>
      </div>

      <!-- Step 4 -->
      <div v-if="currentStep === 4" class="flex items-center gap-3 flex-wrap mt-4">
        <button
          v-for="option in [
            { label: 'Short sessions, 30–60 mins', value: 'little' },
            { label: 'A few hours a week', value: 'few-hours' },
            { label: `I'm fully committed`, value: 'committed' }
          ]"
          :key="option.value"
          @click="selectAnswer('time', option.value)"
          :class="answers.time === option.value
            ? 'border-brand text-white bg-brand'
            : 'border-black/15 text-black/70 bg-white hover:bg-brand hover:border-brand hover:text-white/90'"
          class="border text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
        >
          {{ option.label }}
        </button>
      </div>

      <!-- Step 5 -->
      <div v-if="currentStep === 5" class="mt-4">
        <input
          v-model="answers.artists"
          type="text"
          placeholder="e.g. Hendrix, Clapton, SRV, Metallica…"
          class="w-full bg-white border border-black/15 text-black placeholder-black/30 text-sm px-5 py-3 rounded-full mb-5 focus:outline-none focus:border-brand transition-all duration-200"
        />
        <div class="flex justify-end">
          <button @click="showResults" class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200">
            Show my recommendations →
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
