<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentStep = ref(1)

const answers = ref({
  goal: null,
  level: null,
  genres: [],
  time: null,
  artists: ''
})

function selectAnswer(key, value) {
  answers.value[key] = value
  currentStep.value++
}

// toggle for multi-select genres
function toggleGenre(genre) {
  const genres = answers.value.genres
  const index = genres.indexOf(genre)
  if (index === -1) {
    genres.push(genre)
  } else {
    genres.splice(index, 1)
  }
}

function isSelected(genre) {
  return answers.value.genres.includes(genre)
}

function nextStep() {
  currentStep.value++
}

function goBack() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

function showResults() {
  router.push({
    path: '/recommendations',
    query: {
      goal: answers.value.goal,
      level: answers.value.level,
      genres: answers.value.genres.join(','),
      time: answers.value.time,
      artists: answers.value.artists
    }
  })
}

// title and subtitle update automatically when currentStep changes
const stepTitle = computed(() => {
  const titles = {
    1: 'Find the right lessons for you',
    2: 'What level are you at?',
    3: 'What kind of music do you enjoy?',
    4: 'How much time do you have each week?',
    5: 'Any artists or songs you like?'
  }
  return titles[currentStep.value]
})

const stepSubtitle = computed(() => {
  const subtitles = {
    1: 'Takes ~30 seconds · We\'ll recommend lessons based on your answers',
    2: '',
    3: '',
    4: '',
    5: 'Optional · helps us personalise your recommendations'
  }
  return subtitles[currentStep.value]
})
</script>

<template>
  <div class="bg-[#1a1a1a] border border-white/5 rounded-xl p-10 shrink-0">

   <!-- Header -->
<div :class="currentStep > 1 ? 'mb-5' : 'mb-6'">

  <!-- Steps 2-5 Layout -->
  <template v-if="currentStep > 1">

    <!-- Top Row -->
    <div class="flex items-center justify-between mb-6">
      <button
        @click="goBack"
class="text-white/30 hover:text-white/60 transition text-xs"      >
        ← Back
      </button>

      <span class="text-white/30 text-sm">
        {{ currentStep }}/5
      </span>
    </div>

   <!-- Title + Subtitle -->
<div class="-mt-1">
  <h2 class="text-white font-bold text-2xl leading-tight mb-1">
    {{ stepTitle }}
  </h2>

  <p
    v-if="stepSubtitle"
    class="text-white/40 text-sm"
  >
    {{ stepSubtitle }}
  </p>
</div>

  </template>

  <!-- Step 1 Layout -->
  <template v-else>
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-white font-bold text-2xl">
        {{ stepTitle }}
      </h2>

      <span class="text-white/30 text-sm">
        {{ currentStep }}/5
      </span>
    </div>

    <p class="text-white/40 text-sm">
      {{ stepSubtitle }}
    </p>
  </template>

</div>

    <!-- Step 1 - Goal -->
    <div v-if="currentStep === 1" class="flex items-center gap-3 flex-wrap">
      <button
        v-for="option in [
          { label: '🎸 Learn songs', value: 'learn-songs' },
          { label: '⚡ Improve technique', value: 'improve-technique' },
          { label: '🔁 Get back into playing', value: 'get-back' },
          { label: '🎯 Just exploring', value: 'exploring' }
        ]"
        :key="option.value"
        @click="selectAnswer('goal', option.value)"
        :class="answers.goal === option.value
          ? 'border-brand text-brand bg-brand/10'
          : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'"
        class="border text-sm font-medium px-6 py-3 rounded-full transition"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- Step 2 - Level -->
    <div v-if="currentStep === 2" class="flex items-center gap-3 flex-wrap">
      <button
        v-for="option in [
          { label: '🌱 Beginner', value: 'beginner' },
          { label: '🔥 Intermediate', value: 'intermediate' },
          { label: '⚡ Advanced', value: 'advanced' },
          { label: '🤷 Not sure', value: 'not-sure' }
        ]"
        :key="option.value"
        @click="selectAnswer('level', option.value)"
        :class="answers.level === option.value
          ? 'border-brand text-brand bg-brand/10'
          : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'"
        class="border text-sm font-medium px-6 py-3 rounded-full transition"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- Step 3 - Genres (multi-select) -->
    <div v-if="currentStep === 3">
      <div class="flex items-center gap-3 flex-wrap mb-6">
        <button
          v-for="genre in ['🎸 Classic Rock', &quot;🔥 80's Rock&quot;, '⚡ Rock', '🎵 Blues', '🤘 Metal', '🪵 Acoustic', '🤠 Country', '🎼 Fusion', '🎷 Jazz', '🎤 Pop']"
          :key="genre"
          @click="toggleGenre(genre)"
          :class="isSelected(genre)
            ? 'border-brand text-brand bg-brand/10'
            : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'"
          class="border text-sm font-medium px-6 py-3 rounded-full transition"
        >
          {{ genre }}
        </button>
      </div>
      <div class="flex justify-end">
  <button
    @click="nextStep"
    class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
  >
    Next →
  </button>
</div>
    </div>

    <!-- Step 4 - Time -->
    <div v-if="currentStep === 4" class="flex items-center gap-3 flex-wrap">
      <button
        v-for="option in [
          { label: '⏱️ Just a little (30–60 mins)', value: 'little' },
          { label: '🕐 A few hours (1–3 hrs)', value: 'few-hours' },
          { label: '🔥 I\'m committed (3+ hrs)', value: 'committed' }
        ]"
        :key="option.value"
        @click="selectAnswer('time', option.value)"
        :class="answers.time === option.value
          ? 'border-brand text-brand bg-brand/10'
          : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'"
        class="border text-sm font-medium px-6 py-3 rounded-full transition"
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
        class="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm px-6 py-3 rounded-full mb-6 focus:outline-none focus:border-brand"
      />
      <div class="flex justify-end">
  <button
    @click="showResults"
    class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
  >
    Generate recommendations →
  </button>
</div>
    </div>

  </div>
</template>
