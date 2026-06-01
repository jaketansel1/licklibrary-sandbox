<script setup>
import { ref, watch } from 'vue'
import { useDiscovery } from '../composables/useDiscovery.js'

const {
  isEngaged,
  currentStep,
  totalSteps,
  currentStepName,
  answers,
  techniqueOptions,
  selectAnswer,
  toggleGenre,
  toggleTechnique,
  isGenreSelected,
  isTechniqueSelected,
  nextStep,
  goBack,
  showResults,
  stepTitle,
  stepSubtitle
} = useDiscovery()

const cardRef = ref(null)


</script>

<template>
  <div class="relative shrink-0" style="z-index: 20">

    <!-- Ambient glow -->
    <div
      class="absolute -top-6 left-1/2 -translate-x-1/2 w-2/3 h-24 pointer-events-none"
      style="background: radial-gradient(ellipse at 50% 100%, rgba(238,114,103,0.2) 0%, transparent 65%); filter: blur(20px)"
    ></div>

    <!-- Glass card border wrapper -->
    <div
      class="relative rounded-2xl p-[1px] overflow-hidden"
style="
  max-width: 820px;
        background: linear-gradient(135deg,
          rgba(238,114,103,0.75) 0%,
          rgba(255,255,255,0.22) 20%,
          rgba(255,255,255,0.08) 65%,
          rgba(238,114,103,0.22) 100%
        );
        box-shadow: 0 20px 60px rgba(0,0,0,0.45);
      "
    >
      <div
        class="relative rounded-2xl p-12"
        style="
          background: rgba(12,12,14,0.88);
          backdrop-filter: blur(2px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset 0 -1px 0 rgba(238,114,103,0.08);
        "
      >

        <!-- Header: back button + step counter -->
        <div class="mb-6">
          <template v-if="currentStep > 1">
            <div class="flex items-center justify-between mb-4">
              <button @click="goBack" class="text-white/30 hover:text-white/60 transition text-xs">
                ← Back
              </button>
              <span class="text-white/20 text-xs tracking-wide">{{ currentStep }}/{{ totalSteps }}</span>
            </div>
            <h2 class="text-white font-bold text-2xl leading-tight mb-1">{{ stepTitle }}</h2>
            <p v-if="stepSubtitle" class="text-white/40 text-sm">{{ stepSubtitle }}</p>
          </template>

          <template v-else>
            <div class="flex items-center justify-between mb-3">
              <div class="inline-flex items-center gap-1.5 animate-breathe">
                <span class="text-brand text-xs">✦</span>
                <span class="text-brand text-xs font-semibold tracking-wide">AI-powered recommendations</span>
              </div>
              <span class="text-white/20 text-xs tracking-wide">{{ currentStep }}/{{ totalSteps }}</span>
            </div>
            <h2 class="text-white font-bold text-2xl mb-3">{{ stepTitle }}</h2>
            <p class="text-white/55 text-sm">{{ stepSubtitle }}</p>
          </template>
        </div>

        <!-- STEP: goal -->
        <div v-if="currentStepName === 'goal'" class="flex items-center gap-3 flex-wrap">
          <button
            v-for="option in [
              { label: 'Learn songs I love',        value: 'learn-songs'  },
              { label: 'Improve faster',             value: 'improve'      },
              { label: 'Get inspired again',         value: 'get-inspired' },
              { label: 'Help me find where to start',value: 'get-started'  }
            ]"
            :key="option.value"
            @click="selectAnswer('goal', option.value)"
            :class="answers.goal === option.value
              ? 'border-brand text-white bg-brand scale-105'
              : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
            class="border text-sm font-medium px-4 py-3 rounded-full transition-all duration-200 ease-out"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- STEP: level -->
        <div v-if="currentStepName === 'level'" class="flex items-center gap-3 flex-wrap">
          <button
            v-for="option in [
              { label: 'Just starting out',  value: 'beginner'      },
              { label: 'Getting there',      value: 'intermediate'  },
              { label: 'Pretty advanced',    value: 'advanced'      },
              { label: 'Not sure',           value: 'not-sure'      }
            ]"
            :key="option.value"
            @click="selectAnswer('level', option.value)"
            :class="answers.level === option.value
              ? 'border-brand text-white bg-brand scale-105'
              : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
            class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- STEP: techniques -->
        <div v-if="currentStepName === 'techniques'">
          <div class="flex items-center gap-3 flex-wrap mb-6">
            <button
              v-for="technique in techniqueOptions"
              :key="technique"
              @click="toggleTechnique(technique)"
              :class="isTechniqueSelected(technique)
                ? 'border-brand text-white bg-brand scale-105'
                : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
              class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
            >
              {{ technique }}
            </button>
          </div>
          <div class="flex justify-end">
            <button
              @click="nextStep"
              :disabled="answers.techniques.length === 0"
              :class="answers.techniques.length === 0
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-brand hover:bg-brand/90 text-white cursor-pointer'"
              class="text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Next →
            </button>
          </div>
        </div>

        <!-- STEP: genres -->
        <div v-if="currentStepName === 'genres'">
          <div class="flex items-center gap-3 flex-wrap mb-6">
            <button
              v-for="genre in ['Classic Rock', `80's Rock`, '90s Rock', 'Easy Songs', 'Blues', 'Metal', 'Famous Solos', 'Inspire Me']"
              :key="genre"
              @click="toggleGenre(genre)"
              :class="isGenreSelected(genre)
                ? 'border-brand text-white bg-brand scale-105'
                : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
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

        <!-- STEP: inspiration (Get Inspired Again path) -->
        <div v-if="currentStepName === 'inspiration'" class="flex items-center gap-3 flex-wrap">
          <button
            v-for="option in [
              { label: 'Quick wins',              value: 'quick-wins'    },
              { label: 'Learn a new song',        value: 'new-song'      },
              { label: 'Help with my practice',   value: 'practice'      },
              { label: 'Learning paths',          value: 'learning-paths'},
              { label: 'I just wanna jam',        value: 'jam'           },
              { label: '30 min practice routines',value: 'routines'      },
              { label: 'Warm ups and workouts',   value: 'warmups'       },
              { label: 'Surprise me',             value: 'surprise'      }
            ]"
            :key="option.value"
            @click="selectAnswer('inspiration', option.value)"
            :class="answers.inspiration === option.value
              ? 'border-brand text-white bg-brand scale-105'
              : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
            class="border text-sm font-medium px-4 py-3 rounded-full transition-all duration-200 ease-out"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- STEP: time -->
        <div v-if="currentStepName === 'time'" class="flex items-center gap-3 flex-wrap">
          <button
            v-for="option in [
              { label: 'Short sessions, 30–60 mins', value: 'little'     },
              { label: 'A few hours a week',         value: 'few-hours'  },
              { label: `I'm fully committed`,        value: 'committed'  }
            ]"
            :key="option.value"
            @click="selectAnswer('time', option.value)"
            :class="answers.time === option.value
              ? 'border-brand text-white bg-brand scale-105'
              : 'border-white/8 text-white/75 bg-white/5 hover:border-brand hover:text-white hover:bg-brand'"
            class="border text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-200 ease-out"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- STEP: artists -->
        <div v-if="currentStepName === 'artists'">
          <input
            v-model="answers.artists"
            type="text"
            placeholder="e.g. Hendrix, Clapton, SRV, Metallica…"
            class="w-full bg-white/10 border border-white/15 text-white placeholder-white/50 text-sm px-5 py-3.5 rounded-full mb-6 focus:outline-none focus:border-brand transition-all duration-200"
          />
          <div class="flex justify-end">
            <button
              @click="showResults"
              class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Show my recommendations →
            </button>
          </div>
        </div>

        <!-- Time auto-advances, so show results button appears after time is picked
             only on paths where artists step doesn't exist -->
        <div v-if="currentStepName === 'done'" class="flex justify-end mt-4">
          <button
            @click="showResults"
            class="bg-brand hover:bg-brand/90 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Show my recommendations →
          </button>
        </div>

      </div>
    </div>


  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>