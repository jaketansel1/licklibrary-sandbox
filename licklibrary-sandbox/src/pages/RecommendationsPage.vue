<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppNav from '../components/AppNav.vue'

const route = useRoute()
const router = useRouter()

// Read answers from URL
const answers = {
  goal: route.query.goal,
  level: route.query.level,
  genres: route.query.genres ? route.query.genres.split(',') : [],
  time: route.query.time,
  artists: route.query.artists
}

// State
const courses = ref([])
const aiResponse = ref('')
const loading = ref(true)
const error = ref(null)

// Prototype only: client-side shuffle for varied results.
// Later this should be replaced with API-supported refresh/randomisation logic.
const refreshing = ref(false)

function refreshResults() {
  refreshing.value = true
  setTimeout(() => {
    courses.value = [...courses.value].sort(() => Math.random() - 0.5)
    refreshing.value = false
  }, 800)
}

function buildPrompt() {
  const parts = []
  if (answers.goal) parts.push(`My goal is to ${answers.goal.replace(/-/g, ' ')}`)
  if (answers.time) parts.push(`I have ${answers.time.replace(/-/g, ' ')} per week`)
  if (answers.artists) parts.push(`I like ${answers.artists}`)
  return parts.join('. ') + '. What lessons would you recommend for me?'
}

function mapLevel(level) {
  const map = {
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced',
    'not-sure': "I'm not sure"
  }
  return map[level] || null
}

async function fetchRecommendations() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/v1/recommendations/ai`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
        },
        body: JSON.stringify({
          prompt: buildPrompt(),
          skill_level: mapLevel(answers.level),
          genres: answers.genres.map(g => g.replace(/^[^\s]+ /, '')),
          favourite_artists: answers.artists ? answers.artists.split(',').map(a => a.trim()) : []
        })
      }
    )

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || 'API error')

    courses.value = data.recommendations.items
    aiResponse.value = data.ai_response

  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchRecommendations()
})

function editAnswers() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <AppNav />

    <div class="max-w-[1320px] mx-auto px-6 py-12">

      <!-- Header -->
      <div class="mb-10">
        <p class="text-brand text-xs tracking-widest uppercase mb-3">Personalised for you</p>
        <h1 class="font-heavy text-5xl mb-3">Your recommended lessons</h1>
        <p class="text-white/50 text-base mb-6">{{ aiResponse || 'Based on your answers, here are the lessons we think you\'ll enjoy most.' }}</p>

        <!-- Answer summary pills -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 flex-wrap">
            <span v-if="answers.goal" class="border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full capitalize">
              {{ answers.goal.replace(/-/g, ' ') }}
            </span>
            <span v-if="answers.level" class="border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full capitalize">
              {{ answers.level.replace(/-/g, ' ') }}
            </span>
            <span v-if="answers.time" class="border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full capitalize">
              {{ answers.time.replace(/-/g, ' ') }}
            </span>
            <span
              v-for="genre in answers.genres"
              :key="genre"
              class="border border-white/20 text-white/70 text-xs px-4 py-1.5 rounded-full"
            >
              {{ genre }}
            </span>
          </div>
          
          <div class="flex items-center gap-2 flex-wrap">
  <!-- existing pills ... -->
</div>

<div class="flex items-center gap-3">
  <button
    @click="refreshResults"
    :disabled="refreshing"
    class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition disabled:opacity-50"
  >
    <span :class="refreshing ? 'animate-spin' : ''">↻</span>
    {{ refreshing ? 'Refreshing...' : 'Refresh results' }}
  </button>
  <button
    @click="editAnswers"
    class="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/60 hover:text-white text-sm px-4 py-2 rounded-full transition"
  >
    ✏️ Edit answers
  </button>
</div>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="grid grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="bg-[#111111] rounded-xl overflow-hidden animate-pulse">
          <div class="aspect-[3/4] bg-zinc-800"></div>
          <div class="p-4">
            <div class="h-4 bg-zinc-700 rounded mb-2 w-3/4"></div>
            <div class="h-3 bg-zinc-800 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-white/50 mb-4">Something went wrong loading your recommendations.</p>
        <p class="text-white/30 text-sm mb-6">{{ error }}</p>
        <button @click="fetchRecommendations" class="border border-white/20 text-white px-6 py-3 rounded-full hover:border-white/50 transition">
          Try again
        </button>
      </div>

      <!-- Results grid -->
      <div v-else class="grid grid-cols-4 gap-6">
        <div
          v-for="course in courses"
          :key="course.id"
          class="bg-[#111111] rounded-xl overflow-hidden cursor-pointer group"
        >
          <!-- Thumbnail -->
          <div class="aspect-[3/4] bg-zinc-800 relative overflow-hidden">
            <img
              v-if="course.thumbnail"
              :src="course.thumbnail"
              :alt="course.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div v-else class="w-full h-full bg-zinc-700"></div>

            <!-- Genre tag -->
            <div class="absolute top-3 left-3">
              <span class="bg-black/60 text-white text-xs px-2 py-1 rounded capitalize">
                {{ course.genre_slug?.replace(/-/g, ' ') }}
              </span>
            </div>
          </div>

          <!-- Card content -->
          <div class="p-4">
            <h3 class="text-white font-bold text-base mb-1 leading-snug">{{ course.title }}</h3>
            <p class="text-white/50 text-sm capitalize">
  {{ course.artists?.map(a => a.name).join(', ') }}
  <span v-if="course.skill_slug"> · {{ course.skill_slug.replace(/-/g, ' ') }}</span>
</p>

<!-- Why this? panel -->
<div class="mt-4 mb-4 border border-white/10 rounded-lg p-3 bg-white/[0.03]">
  <p class="text-[#EE7267] text-[10px] font-bold tracking-widest uppercase mb-2">Why this?</p>
  <p class="text-white/60 text-xs leading-relaxed">
    A perfect match for rock fans — covers iconic riffs and dark tonality from one of rocks greatest albums. (To be replaced with AI logic/API response later.)
  </p>
</div>

            <!-- View button -->
            
              <a
              :href="course.url"
              target="_blank"
              class="block w-full border border-white/20 hover:border-brand hover:bg-brand text-white/70 hover:text-white text-sm py-2.5 rounded-lg transition text-center"
            >
              View lesson
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
