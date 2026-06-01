import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isEngaged = ref(false)

export function useDiscovery() {
  const router = useRouter()
  const currentStep = ref(1)

  const answers = ref({
    goal: null,
    level: null,
    genres: [],
    techniques: [],
    inspiration: null,
    time: null,
    artists: ''
  })

  onMounted(() => {
    isEngaged.value = false
    currentStep.value = 1
    answers.value = {
      goal: null,
      level: null,
      genres: [],
      techniques: [],
      inspiration: null,
      time: null,
      artists: ''
    }
  })

  // ... rest of your code

  // ─── STEP MAPS PER GOAL ───────────────────────────────────────────
  // Each goal has its own sequence of step "names"
  // We use these names in the template to decide what to render
  const stepMaps = {
  'learn-songs':  ['goal', 'genres', 'time', 'artists'],
  'improve':      ['goal', 'level', 'techniques', 'time', 'artists'],
  'get-inspired': ['goal', 'inspiration', 'time', 'artists'],
  'get-started':  ['goal', 'level', 'techniques', 'time', 'artists'],
}

  // What's the current step "name"?
  // e.g. if goal is 'learn-songs' and we're on step 2, the name is 'genres'
  const currentStepName = computed(() => {
    const goal = answers.value.goal
    if (!goal) return 'goal'
    const map = stepMaps[goal]
    return map[currentStep.value - 1] ?? 'time'
  })

  // Total steps for the chosen goal (drives the x/y counter)
  const totalSteps = computed(() => {
    const goal = answers.value.goal
    if (!goal) return 4 // default before anything is selected
    return stepMaps[goal].length
  })

  // ─── TECHNIQUES PER LEVEL ─────────────────────────────────────────
  const techniqueOptions = computed(() => {
    const level = answers.value.level
    if (level === 'beginner') return [
      'Lead Guitar', 'Rhythm Guitar', 'Chords',
      'Understand the Fretboard', 'Simple Solos', 'Easy Licks'
    ]
    if (level === 'intermediate' || level === 'advanced') return [
  'Speed and Accuracy', 'Picking Techniques', 'Guitar Workouts',
  'Blues', 'Metal', 'Rhythm Guitar', 'Practice Routines',
  'Improvisation', 'Understand the Fretboard', 'Harmony and Theory',
  'Something Else', 'Inspire Me'
]
    // 'not-sure' — show a broad starter list
    return [
      'Lead Guitar', 'Rhythm Guitar', 'Chords', 'Blues',
      'Practice Routines', 'Understand the Fretboard'
    ]
  })

  // ─── ANSWER SELECTION ─────────────────────────────────────────────
  function selectAnswer(key, value) {
  answers.value[key] = value
  isEngaged.value = true
  const map = stepMaps[answers.value.goal ?? 'learn-songs']
  const isLastStep = currentStep.value >= map.length
  if (isLastStep) {
    showResults()
  } else {
    currentStep.value++
  }
}

  function toggleGenre(genre) {
    isEngaged.value = true
    const genres = answers.value.genres
    const i = genres.indexOf(genre)
    i === -1 ? genres.push(genre) : genres.splice(i, 1)
  }

  function toggleTechnique(technique) {
    isEngaged.value = true
    const techniques = answers.value.techniques
    const i = techniques.indexOf(technique)
    i === -1 ? techniques.push(technique) : techniques.splice(i, 1)
  }

  function isGenreSelected(genre) {
    return answers.value.genres.includes(genre)
  }

  function isTechniqueSelected(technique) {
    return answers.value.techniques.includes(technique)
  }

  // Kept for backwards compat — template uses isGenreSelected now
  function isSelected(item) {
    return answers.value.genres.includes(item)
  }

  function nextStep() {
    currentStep.value++
  }

  function goBack() {
  if (currentStep.value > 1) {
    currentStep.value--
    if (currentStep.value === 1) {
      isEngaged.value = false
    }
  }
}

  function showResults() {
    router.push({
      path: '/recommendations',
      query: {
        goal: answers.value.goal,
        level: answers.value.level,
        genres: answers.value.genres.join(','),
        techniques: answers.value.techniques.join(','),
        inspiration: answers.value.inspiration,
        time: answers.value.time,
        artists: answers.value.artists
      }
    })
  }

  // ─── STEP TITLES ──────────────────────────────────────────────────
  const stepTitle = computed(() => {
    const name = currentStepName.value
    const level = answers.value.level

    const titles = {
      goal:         'What brings you here today?',
      genres:       'What kind of music do you love?',
      artists:      'Any artists or songs you like?',
      time:         'How much time can you give it?',
      level:        'How would you describe your playing?',
      techniques:   level === 'beginner'
                      ? 'What would you like to learn first?'
                      : 'What do you want to work on?',
      inspiration:  'What would help you most right now?',
    }
    return titles[name] ?? ''
  })

  const stepSubtitle = computed(() => {
    const name = currentStepName.value
    const subtitles = {
      goal:        "We'll find the right lessons for where you are right now",
      artists:     'Optional · helps us personalise your recommendations',
      techniques:  'Pick as many as you like',
      genres:      'Pick as many as you like',
      inspiration: '',
      level:       '',
      time:        '',
    }
    return subtitles[name] ?? ''
  })

  return {
    isEngaged,
    currentStep,
    totalSteps,
    currentStepName,
    answers,
    techniqueOptions,
    selectAnswer,
    toggleGenre,
    toggleTechnique,
    isSelected,
    isGenreSelected,
    isTechniqueSelected,
    nextStep,
    goBack,
    showResults,
    stepTitle,
    stepSubtitle
  }
}