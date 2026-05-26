<template>
  <div class="min-h-screen bg-[#080808] text-white">

    <NavBar />

    <!-- Hero -->
    <section class="relative overflow-hidden min-h-[720px] flex items-center">

      <div class="absolute inset-0 flex justify-end pointer-events-none">
        <img
          src="/hero-lp.jpg"
          alt=""
          class="h-full w-[100%] object-cover object-center opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 mx-auto w-full max-w-[1320px] px-8 py-24">
        <p class="text-secondary text-xs tracking-widest uppercase mb-4">Learning Path</p>
        <h1 class="font-heavy text-6xl leading-tight mb-6 uppercase">
          Shred Ninja - Sweep<br />Picking Challenge
        </h1>
        <p class="text-white/60 text-m leading-relaxed max-w-lg mb-8">
          A systematic journey through the essential scales every guitarist needs. From basic pentatonic positions through to major and minor scales — all designed to boost your scale knowledge in just two weeks.
        </p>
        <div class="flex gap-4 mb-10">
          <button class="bg-secondary text-white text-sm uppercase tracking-wide font-semibold px-8 py-4 hover:brightness-110 transition duration-200">
            Start Learning Path
          </button>
          <button class="border border-white/20 text-white/60 text-sm uppercase tracking-wide font-semibold px-8 py-4 hover:bg-white hover:text-black/90 transition duration-200">
            Preview Lessons
          </button>
        </div>
        <div class="flex gap-8">
          <div class="flex items-center gap-2 text-white/80 text-m">
            <span class="text-secondary">▶</span>
            <span>18 Lessons</span>
          </div>
          <div class="flex items-center gap-2 text-white/80 text-m">
            <span class="text-secondary">◷</span>
            <span>3h 06m 51s</span>
          </div>
        </div>
      </div>

    </section>

    <!-- Explainer section -->
    <section class="py-16">
      <div class="mx-auto w-full max-w-[1320px] px-8">
        <div class="text-center mb-12">
          <h2 class="font-heavy text-5xl text-secondary mb-4">What is a Learning Path, and how will it help me?</h2>
          <p class="text-white/70 text-m max-w-5xl mx-auto leading-relaxed">
            Don't know where to start? Our Learning Paths take the most common guitar goals, themes and playing styles and provide a handpicked path of lessons, from our library, to put you on track.
          </p>
        </div>
        <video
          src="/coaching.mp4"
          autoplay
          muted
          loop
          playsinline
          class="w-full max-w-5xl mx-auto rounded-xl block"
        />
      </div>
    </section>

    <!-- Curriculum section -->
    <section class="py-20">
      <div class="mx-auto w-full max-w-[1320px] px-8">

        <p class="text-secondary text-xs tracking-widest uppercase mb-3">EXPERT LEARNING PATH</p>
        <h2 class="font-heavy text-4xl text-white mb-12">Sweep Picking Challenge</h2>

        <div class="flex flex-col gap-4">

          <div
            v-for="(week, index) in curriculum"
            :key="week.id"
            class="bg-[#111111] border border-white/5 rounded-xl p-6 flex items-center gap-6"
          >
            <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-heavy text-sm flex-shrink-0">
              {{ index + 1 }}
            </div>

            <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <img :src="week.image" :alt="week.title" class="w-full h-full object-cover" />
            </div>

            <div class="w-64 flex-shrink-0">
              <p class="text-white/30 text-xs uppercase tracking-wide mb-1">{{ week.weekLabel }}</p>
              <h3 class="font-heavy text-lg text-white mb-2">{{ week.title }}</h3>
              <div class="flex gap-4 text-white/40 text-xs">
                <span>▶ {{ week.lessons }} Lessons</span>
                <span>◷ {{ week.duration }}</span>
              </div>
            </div>

            <div class="flex flex-col gap-1 text-white/50 text-sm flex-1 pl-32">
              <span v-for="topic in week.topics" :key="topic" class="flex items-start gap-2">
                <span class="text-secondary mt-0.5 flex-shrink-0">·</span>
                <span>{{ topic }}</span>
              </span>
            </div>

            <div class="flex items-center gap-10 flex-shrink-0">
              <button class="bg-secondary text-white text-xs uppercase tracking-wide font-semibold px-6 py-3 hover:brightness-110 transition duration-200">
                Start Lesson
              </button>
              <button class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white/60 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>

          </div>

        </div> <!-- end flex flex-col gap-4 -->

      </div> <!-- end container -->
    </section>

    <!-- Tutor section -->
    <div class="mx-auto w-full max-w-[1320px]">
      <TutorSection accent-color="text-secondary" />
    </div>

    <!-- Related paths -->
    <section class="py-24">
      <div class="mx-auto w-full max-w-[1320px] px-8">

        <div class="mb-12">
          <p class="text-secondary text-xs tracking-widest uppercase mb-3">Keep Learning</p>
          <h2 class="font-heavy text-4xl text-white">Other Learning Paths You Might Like</h2>
        </div>

        <div class="grid grid-cols-3 gap-10">
          <PathCard
            v-for="path in relatedPaths"
            :key="path.id"
            :path="path"
          />
        </div>

      </div>
    </section>
<footer-section />
  </div> <!-- end page wrapper -->
</template>

<script setup>
import NavBar from '../components/AppNav.vue'
import TutorSection from '../components/TutorSection.vue'
import PathCard from '../components/PathCard.vue'
import FooterSection from '../components/FooterSection.vue'

const curriculum = [
  {
    id: 1,
    weekLabel: 'Week 1',
    title: 'Pentatonic Scales',
    lessons: 2,
    duration: '37 mins',
    image: '/shred1.jpg',
    topics: ['Preparatory Techniques & Exercises', 'Complete Song']
  },
  {
    id: 2,
    weekLabel: 'Week 2',
    title: 'Blues, Major & Minor Scales',
    lessons: 3,
    duration: '22 mins',
    image: '/shred2.jpg',
    topics: ['Preparatory Techniques & Exercises', 'Main Riff & Chorus', 'Solo & Middle Section']
  },
  {
    id: 3,
    weekLabel: 'Week 3',
    title: 'Advanced Scale Application',
    lessons: 4,
    duration: '41 mins',
    image: '/shred3.jpg',
    topics: ['Scale Sequences', 'Improvisation Basics', 'Putting It All Together']
  },
  {
    id: 4,
    weekLabel: 'Week 4',
    title: 'Performance & Speed Building',
    lessons: 3,
    duration: '34 mins',
    image: '/shred4.jpg',
    topics: ['Speed & Accuracy Drills', 'Full Performance Run', 'Next Steps']
  },
]

const relatedPaths = [
  {
    id: 2,
    title: '2 Week Technique Builder',
    tutor: 'Sam Bell',
    level: 'Beginner',
    genre: 'Rock',
    image: '/learningpath-2.jpg',
    description: 'Strengthen your picking and fretting hand technique with focused workouts and exercises. Noticeable results in just two weeks.'
  },
  {
    id: 3,
    title: '10 Classic Rock Songs in 10 Days',
    tutor: 'Rich Shaw',
    level: 'Intermediate',
    genre: 'Rock',
    image: '/learningpath-3.jpg',
    description: 'Learn ten essential classic rock songs every guitarist should know. Covers the chords, techniques and scales behind each song.'
  },
  {
    id: 4,
    title: 'Blues Lead Guitar',
    tutor: 'Andy James',
    level: 'Intermediate',
    genre: 'Blues',
    image: '/learningpath-1.jpg',
    description: 'Dive deep into the language of blues lead guitar. Learn the phrases, bends and feel that define the genre.'
  },
]
</script>