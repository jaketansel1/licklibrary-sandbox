<template>
  <div class="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 z-50">

    <!-- ===================== TAB BAR ===================== -->
    <div class="flex items-center gap-10 px-16 border-b border-white/10">
      <button
        v-for="tab in tabs"
        :key="tab"
        @mouseenter="activeTab = tab"
        class="py-4 text-sm font-medium transition duration-200 border-b-2 -mb-px"
        :class="activeTab === tab
          ? 'text-white border-brand'
          : 'text-white/40 border-transparent hover:text-white/70'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- ===================== GUITAR LESSONS MENU ===================== -->
    <div v-if="type === 'lessons'">

      <!-- GUITAR LESSONS > FEATURED TAB — rich layout -->
      <div v-if="activeTab === 'Featured'" class="flex px-20 py-10 gap-16">

        <!-- Left: Browse + Skill Levels -->
        <div class="w-52 shrink-0">
          <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
          <ul class="space-y-3 mb-8">
            <li v-for="link in lessonsTab.browseLinks" :key="link">
              <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
            </li>
          </ul>
          <p class="text-brand text-xs uppercase tracking-widest mb-4">Skill Level</p>
          <ul class="space-y-3">
            <li v-for="level in lessonsTab.skillLevels" :key="level">
              <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ level }}</a>
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="w-px bg-white/10 shrink-0"></div>

        <!-- Middle: Popular Lessons -->
        <div class="w-64 shrink-0">
          <p class="text-brand text-xs uppercase tracking-widest mb-5">Popular Lessons</p>
          <ul class="space-y-4">
            <li v-for="lesson in lessonsTab.popular" :key="lesson.title">
              <div class="cursor-pointer group">
                <p class="text-white/80 group-hover:text-white text-sm font-medium transition duration-200">{{ lesson.title }}</p>
                <p class="text-white/30 text-xs mt-0.5">{{ lesson.artist }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="w-px bg-white/10 shrink-0"></div>

        <!-- Middle: Popular Artists -->
        <div class="w-80 shrink-0">
          <p class="text-brand text-xs uppercase tracking-widest mb-5">Popular Artists</p>
          <div class="grid grid-cols-3 gap-x-4 gap-y-5">
            <div
              v-for="artist in lessonsTab.artists"
              :key="artist.name"
              class="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div class="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                <img :src="artist.image" :alt="artist.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <span class="text-white/50 group-hover:text-white text-xs transition duration-200">{{ artist.name }}</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="w-px bg-white/10 shrink-0"></div>

        <!-- Right: What's Hot -->
        <div class="flex-1">
          <p class="text-brand text-xs uppercase tracking-widest mb-5">What's Hot</p>
          <div class="flex 2xl:flex-row flex-col gap-4">
            <div
              v-for="item in lessonsTab.whatsHot"
              :key="item.title"
              class="flex-1 group cursor-pointer"
            >
              <div class="rounded-lg overflow-hidden mb-3 relative">
                <img :src="item.image" :alt="item.title" class="w-full aspect-[16/9] max-h-52 object-cover group-hover:scale-105 transition duration-500" />
                <span
                  class="absolute top-2 left-2 text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded"
                  :class="item.level === 'Intermediate' ? 'bg-blue-500/80 text-white' : 'bg-green-600/80 text-white'"
                >{{ item.level }}</span>
              </div>
              <p class="text-white text-xs font-semibold leading-snug">{{ item.title }}</p>
              <p class="text-white/40 text-xs mt-1">{{ item.tutor }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- GUITAR LESSONS > ALL OTHER TABS -->
      <div v-else class="flex px-20 py-10 gap-16">

        <!-- Left: context-sensitive links -->
        <div class="w-52 shrink-0">
          <template v-if="activeTab === 'Tutors'">
            <p class="text-brand text-xs uppercase tracking-widest mb-4">Tutors</p>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">All Tutors</a></li>
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">Featured Tutors</a></li>
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">New Tutors</a></li>
            </ul>
          </template>
          <template v-else>
            <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
            <ul class="space-y-3 mb-8">
              <li v-for="link in lessonsTab.browseLinks" :key="link">
                <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
              </li>
            </ul>
            <p class="text-brand text-xs uppercase tracking-widest mb-4">Skill Level</p>
            <ul class="space-y-3">
              <li v-for="level in lessonsTab.skillLevels" :key="level">
                <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ level }}</a>
              </li>
            </ul>
          </template>
        </div>

        <!-- Divider -->
        <div class="w-px bg-white/10 shrink-0"></div>

         <!-- TUTORS tab -->
        <div v-if="activeTab === 'Tutors'" class="flex-1">
          <p class="text-brand text-xs uppercase tracking-widest mb-6">Popular Tutors</p>
          <div class="flex gap-6">
            <div
              v-for="tutor in lessonsTab.tutors"
              :key="tutor.name"
              class="flex-1 group cursor-pointer"
            >
              <div class="rounded-lg overflow-hidden mb-3">
                <img :src="tutor.image" :alt="tutor.name" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <p class="text-white text-sm font-semibold">{{ tutor.name }}</p>
            </div>
          </div>
        </div>

        <!-- ARTISTS tab -->
        <div v-else-if="activeTab === 'Artists'" class="flex-1">
          <p class="text-brand text-xs uppercase tracking-widest mb-6">Popular Artists</p>
          <div class="grid grid-cols-6 gap-6 grid-rows-2">
            <div
              v-for="artist in lessonsTab.artists"
              :key="artist.name"
              class="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div class="w-20 h-20 rounded-full overflow-hidden bg-white/10">
                <img :src="artist.image" :alt="artist.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <span class="text-white/60 group-hover:text-white text-xs font-medium text-center transition duration-200">{{ artist.name }}</span>
            </div>
          </div>
        </div>

        <!-- ALL OTHER TABS — grid layout -->
        <div v-else class="flex-1">
          <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>
          <div class="grid grid-cols-5 gap-4">
            <div
              v-for="item in lessonsTab.gridItems"
              :key="item.title"
              class="group cursor-pointer"
            >
              <div class="rounded-lg overflow-hidden mb-2">
                <img :src="item.image" :alt="item.title" class="w-full aspect-[16/9] max-h-44 object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <p class="text-white text-xs font-semibold leading-snug">{{ item.title }}</p>
              <p class="text-white/40 text-xs mt-0.5">{{ item.tutor }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- ===================== GUITAR COURSES MENU ===================== -->
    <div v-else class="flex px-20 py-10 gap-16">

      <!-- Left: Browse + Genre -->
      <div class="w-52 shrink-0">
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
        <ul class="space-y-3 mb-8">
          <li v-for="link in currentTab.browseLinks" :key="link">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
          </li>
        </ul>
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Genre</p>
        <ul class="space-y-3">
          <li v-for="genre in currentTab.genres" :key="genre">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ genre }}</a>
          </li>
        </ul>
      </div>

      <!-- Divider -->
      <div class="w-px bg-white/10 shrink-0"></div>

      <!-- Right: Featured cards -->
      <div class="flex-1">
        <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>

        <!-- Portrait layout (New, Classic Albums etc) -->
        <div v-if="currentTab.layout === 'portrait'" class="flex gap-4 overflow-hidden">
          <div
            v-for="(course, index) in currentTab.featured"
            :key="course.title"
            class="w-42 shrink-0 cursor-pointer group"
            :class="index === 5 ? 'hidden 2xl:block' : ''"
          >
            <div class="rounded-lg overflow-hidden mb-3">
              <img :src="course.image" :alt="course.title" class="w-full aspect-[2/3] max-h-64 object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <p class="text-white text-xs font-semibold leading-snug">{{ course.title }}</p>
            <p class="text-white/40 text-xs mt-1">{{ course.tutor }}</p>
          </div>
        </div>

        <!-- Landscape layout (Learning Paths) -->
        <div v-else class="flex flex-row gap-6">
          <div
            v-for="course in currentTab.featured"
            :key="course.title"
            class="flex-1 cursor-pointer group"
          >
            <div class="rounded-lg overflow-hidden mb-3">
              <img :src="course.image" :alt="course.title" class="w-full aspect-video object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <p class="text-white text-sm font-semibold leading-snug mb-1">{{ course.title }}</p>
            <p class="text-white/40 text-xs">{{ course.tutor }}</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'courses'
  }
})

const lessonsTabs = ['Featured', 'New', 'Song Lessons', 'Genre', 'Artists', 'Tutors', 'Most Watched']
const coursesTabs = ['New', 'Classic Albums', 'Technique', 'Song Courses', 'Beginners', 'Learning Paths', 'Licks', 'Most Watched']

const tabs = computed(() => props.type === 'lessons' ? lessonsTabs : coursesTabs)

const activeTab = ref('New')

const lessonsTab = {
  browseLinks: ['All Lessons', 'Latest', 'Most Popular'],
  skillLevels: ['Beginner', 'Easy', 'Intermediate', 'Expert'],
  popular: [
    { title: 'Smoke on the Water', artist: 'Deep Purple' },
    { title: 'Enter Sandman', artist: 'Metallica' },
    { title: 'Comfortably Numb', artist: 'Pink Floyd' },
    { title: "Sweet Child O'Mine", artist: "Guns N' Roses" },
    { title: 'Back in Black', artist: 'AC/DC' },
    { title: 'Eruption', artist: 'Van Halen' },
  ],
  artists: [
    { name: 'AC/DC', image: '/artist-acdc.jpg' },
    { name: 'Black Sabbath', image: '/artist-blacksabbath.jpg' },
    { name: 'Eagles', image: '/artist-eagles.jpg' },
    { name: 'Eric Clapton', image: '/artist-ericclapton.jpg' },
    { name: 'Foo Fighters', image: '/artist-foofighters.jpg' },
    { name: "Guns N' Roses", image: '/artist-gunsnroses.jpg' },
    { name: 'Jimi Hendrix', image: '/artist-jimihendrix.jpg' },
    { name: 'Led Zeppelin', image: '/artist-ledzeppelin.jpg' },
    { name: 'Pink Floyd', image: '/artist-pinkfloyd.jpg' },
    { name: 'Metallica', image: '/artist-metallica.jpg' },
{ name: 'Iron Maiden', image: '/artist-ironmaiden.jpg' },
{ name: 'Linkin Park', image: '/artist-linkinpark.jpg' },
  ],

  whatsHot: [
    { title: 'Billy Idol', tutor: 'Danny Gill', level: 'Intermediate', image: '/hero-artist_Billy_Idol.jpg' },
    { title: 'Joe Satriani', tutor: 'Jamie Humphries', level: 'Easy', image: '/hero-artist_Joe_Satriani.jpg' },
  ],
  gridItems: [
    { title: 'Billy Idol', tutor: 'Danny Gill', image: '/hero-artist_Billy_Idol.jpg' },
    { title: 'Carlos Santana', tutor: 'Jamie Humphries', image: '/hero-artist_Carlos_Santana.jpg' },
    { title: 'Duran Duran', tutor: 'Danny Gill', image: '/hero-artist_Duran_Duran.jpg' },
    { title: 'Joe Satriani', tutor: 'Sam Bell', image: '/hero-artist_Joe_Satriani.jpg' },
    { title: 'Linkin Park', tutor: 'Danny Gill', image: '/hero-artist_Linkin_Park.jpg' },
  ],

  tutors: [
  { name: 'Danny Gill', image: '/hero-tutor_Danny_Gill.jpg' },
  { name: 'Eliza Lee', image: '/hero-tutor_Eliza_Lee.jpg' },
  { name: 'Nick Jennison', image: '/hero-tutor_Nick_Jennison_2.jpg' },
  { name: 'Rich Shaw', image: '/hero-tutor_Rich_Shaw.jpg' },
  { name: 'Sam Bell', image: '/hero-tutor_Sam_Bell.jpg' },
],
}

const tabContent = {
  'New': {
    layout: 'portrait',
    browseLinks: ['All New Courses', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', '80s', 'Blues'],
    featured: [
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
      { title: 'Are You Experienced', tutor: 'Danny Gill', image: '/course-2.jpg' },
      { title: 'Dr. Feelgood', tutor: 'Danny Gill', image: '/course-3.jpg' },
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
      { title: 'Hotel California', tutor: 'Danny Gill', image: '/course-5.jpg' },
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
    ]
  },
  'Classic Albums': {
    layout: 'portrait',
    browseLinks: ['All Classic Albums', 'Latest', 'Most Popular'],
    genres: ['Rock', 'Metal', 'Blues', 'Pop'],
    featured: [
      { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
      { title: 'Metallica - The Black Album', tutor: 'Jamie Humphries', image: '/course-7.jpg' },
      { title: '5150', tutor: 'Sam Bell', image: '/course-8.jpg' },
      { title: 'Machine Head', tutor: 'Danny Gill', image: '/course-9.jpg' },
      { title: 'The Number Of The Beast', tutor: 'Danny Gill', image: '/course-10.jpg' },
      { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
    ]
  },
  'Learning Paths': {
    layout: 'landscape',
    browseLinks: ['All Learning Paths', 'Latest', 'Most Popular'],
    genres: ['Beginner', 'Intermediate', 'Advanced'],
    featured: [
      { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', image: '/learningpath-1.jpg' },
      { title: '2 Week Technique Builder', tutor: 'Sam Bell', image: '/learningpath-2.jpg' },
      { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', image: '/learningpath-3.jpg' },
    ]
  }
}

const currentTab = computed(() => {
  return tabContent[activeTab.value] || tabContent['New']
})
</script>