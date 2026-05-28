import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export function useDiscovery() {
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
    if (currentStep.value > 1) currentStep.value--
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

  const stepTitle = computed(() => ({
    1: 'What brings you here today?',
    2: 'How would you describe your playing?',
    3: 'What genres do you like?',
    4: 'How much time can you give it?',
    5: 'Any artists or songs you love?'
  }[currentStep.value]))

  const stepSubtitle = computed(() => ({
    1: "We'll find the right lessons for where you are right now",
    2: '',
    3: '',
    4: '',
    5: 'Optional · helps us personalise your recommendations'
  }[currentStep.value]))

  return {
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
  }
}