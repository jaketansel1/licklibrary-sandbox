<template>
  <div class="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 z-50">

    <!-- ===================== TAB BAR ===================== -->
<div v-if="type !== 'tutors' && type !== 'learning-paths'" class="flex items-center gap-10 px-12 border-b border-white/10">
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
      <div v-if="activeTab === 'Featured'" class="flex px-12 py-8 gap-10">

        <!-- Left: Browse + Skill Levels -->
        <div class="w-40 shrink-0">
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
        <div class="w-48 shrink-0">
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
        <div class="w-64 shrink-0">
          <p class="text-brand text-xs uppercase tracking-widest mb-5">Popular Artists</p>
          <div class="grid grid-cols-2 gap-x-4 gap-y-5">
            <div
              v-for="artist in lessonsTab.artists.slice(0, 6)"
              :key="artist.name"
              class="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div class="w-18 h-18 rounded-full overflow-hidden bg-white/10">
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
        v-for="(item, index) in lessonsTab.whatsHot"
        :key="item.title"
        class="flex-1 group cursor-pointer"
        :class="index === 1 ? 'hidden 2xl:block' : ''"
>
              <div class="overflow-hidden mb-3 relative">
                <img :src="item.image" :alt="item.title" class="w-full aspect-[16/9]  object-cover group-hover:scale-105 transition duration-500" />
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
      <div v-else class="flex px-12 py-8 gap-10">

        <!-- Left: context-sensitive links -->
        <div class="w-40 shrink-0">
          <template v-if="activeTab === 'Tutors'">
  <p class="text-brand text-xs uppercase tracking-widest mb-4">Tutors</p>
  <ul class="space-y-3">
    <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">All Tutors</a></li>
  </ul>
</template>
          <template v-else-if="activeTab === 'Artists'">
            <p class="text-brand text-xs uppercase tracking-widest mb-4">Artists</p>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">All Artists</a></li>
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">Most Popular</a></li>
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">A-Z</a></li>
            </ul>
          </template>
          <template v-else-if="activeTab === 'Genre'">
            <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">All Genres</a></li>
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
              <div class="overflow-hidden mb-3">
                <img :src="tutor.image" :alt="tutor.name" class="w-full aspect-square object-cover object-top group-hover:scale-105 transition duration-500" />
              </div>
              <p class="text-white text-xs font-semibold">{{ tutor.name }}</p>
<p class="text-white/40 text-xs mt-1">{{ tutor.lessons }} lessons</p>
            </div>
          </div>
        </div>

       <!-- ARTISTS tab -->
<div v-else-if="activeTab === 'Artists'" class="flex-1">
  <p class="text-brand text-xs uppercase tracking-widest mb-6">Popular Artists</p>
  <div class="flex gap-6">
    <div
      v-for="(artist, index) in lessonsTab.artists.slice(0, 7)"
      :key="artist.name"
      class="flex-1 group cursor-pointer"
    >
      <div class="overflow-hidden mb-3">
        <img :src="artist.image" :alt="artist.name" class="w-full aspect-square object-cover object-top group-hover:scale-105 transition duration-500" />
      </div>
      <p class="text-white text-xs font-semibold">{{ artist.name }}</p>
      <p class="text-white/40 text-xs mt-1">{{ artist.lessons }} lessons</p>
    </div>
  </div>
</div>

        <!-- GENRE tab -->
        <div v-else-if="activeTab === 'Genre'" class="flex-1">
          <div class="flex gap-10">

            <!-- Genre list -->
            <div class="w-48 shrink-0">
              <p class="text-brand text-xs uppercase tracking-widest mb-5">Featured</p>
              <ul class="space-y-3">
                <li v-for="genre in lessonsTab.genres" :key="genre">
                  <a href="#" class="text-white/70 hover:text-white text-sm font-medium transition duration-200">{{ genre }}</a>
                </li>
              </ul>
            </div>

            <!-- Divider -->
            <div class="w-px bg-white/10 shrink-0"></div>

            <!-- Genre feature columns -->
            <div class="flex flex-1 gap-8">
              <div v-for="genre in lessonsTab.genreFeatures" :key="genre.name" class="flex-1">
                <p class="text-brand text-xs uppercase tracking-widest mb-4">{{ genre.name }}</p>
                <div class="flex flex-col gap-3">
                  <div v-for="lesson in genre.lessons" :key="lesson.title" class="group cursor-pointer">
                    <div class="overflow-hidden mb-2">
                      <img :src="lesson.image" :alt="lesson.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <p class="text-white text-xs font-semibold leading-snug">{{ lesson.title }}</p>
                    <p class="text-white/40 text-xs mt-0.5">{{ lesson.tutor }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ALL OTHER TABS — grid layout -->
        <div v-else class="flex-1">
          <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>
          <div class="grid grid-cols-4 min-[1800px]:grid-cols-5 gap-4">
            <div
  v-for="(item, index) in lessonsTab.gridItems"
  :key="item.title"
  class="group cursor-pointer"
  :class="index >= 5 ? 'min-[1800px]:hidden' : ''"
>
              <div class="overflow-hidden mb-2">
                <img :src="item.image" :alt="item.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <p class="text-white text-xs font-semibold leading-snug">{{ item.title }}</p>
              <p class="text-white/40 text-xs mt-0.5">{{ item.tutor }}</p>
            </div>
          </div>
        </div>

      </div>
<div class="flex justify-end px-12 pb-6">
  <a href="/guitar-lessons" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Guitar Lessons →</a>
</div>
    </div>

    <!-- ===================== GUITAR COURSES MENU ===================== -->
<div v-else-if="type === 'courses'">
  <div class="flex px-12 py-8 gap-10">

    <!-- Left: Browse + Genre -->
    <div class="w-40 shrink-0">
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

      <!-- Portrait layout -->
      <div v-if="currentTab.layout === 'portrait'" class="flex gap-4 overflow-hidden">
        <div
          v-for="(course, index) in currentTab.featured"
          :key="course.title"
          class="w-42 shrink-0 cursor-pointer group"
          :class="index >= 6 ? 'hidden 2xl:block' : ''"
        >
          <div class="overflow-hidden mb-3">
            <img :src="course.image" :alt="course.title" class="w-full aspect-[2/3] max-h-64 object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold leading-snug">{{ course.title }}</p>
          <p class="text-white/40 text-xs mt-1">{{ course.tutor }}</p>
        </div>
      </div>

      <!-- Landscape layout -->
      <div v-else class="flex flex-row gap-6">
        <div
          v-for="course in currentTab.featured"
          :key="course.title"
          class="flex-1 cursor-pointer group"
        >
          <div class="overflow-hidden mb-3">
            <img :src="course.image" :alt="course.title" class="w-full aspect-video object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-sm font-semibold leading-snug mb-1">{{ course.title }}</p>
          <p class="text-white/40 text-xs">{{ course.tutor }}</p>
        </div>
      </div>

    </div>

  </div>
  <div class="flex justify-end px-12 pb-6">
    <a href="/guitar-courses" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Guitar Courses →</a>
  </div>
</div>

<!-- ===================== BACKING TRACKS MENU ===================== -->
<div v-else-if="type === 'backing-tracks'">

  <!-- FEATURED tab -->
  <div v-if="activeTab === 'Featured'" class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3 mb-8">
        <li v-for="link in backingTracksTab.browseLinks" :key="link">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
        </li>
      </ul>
      <ul class="space-y-3">
        <li v-for="goal in backingTracksTab.practiceGoals" :key="goal">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ goal }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured Tracks</p>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="track in backingTracksTab.featured" :key="track.title" class="group cursor-pointer">
          <div class="overflow-hidden mb-2">
            <img :src="track.image" :alt="track.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold leading-snug">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-0.5">{{ track.key }} · {{ track.style }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- GENRES tab -->
  <div v-else-if="activeTab === 'Genres'" class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">All Genres</p>
      <ul class="space-y-3">
        <li v-for="genre in backingTracksTab.genres" :key="genre">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ genre }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="track in backingTracksTab.featured" :key="track.title" class="group cursor-pointer">
          <div class="overflow-hidden mb-2">
            <img :src="track.image" :alt="track.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-0.5">{{ track.style }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- JAM TRACKS tab -->
  <div v-else-if="activeTab === 'Jam Tracks'" class="flex px-12 py-8 gap-10">
    <div class="w-36 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Keys</p>
      <ul class="space-y-3 mb-8">
        <li v-for="key in backingTracksTab.jamTracks.keys" :key="key">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ key }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="w-36 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Track Type</p>
      <ul class="space-y-3">
        <li v-for="type in backingTracksTab.jamTracks.types" :key="type">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ type }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured Jam Tracks</p>
      <div class="flex gap-6">
        <div v-for="track in backingTracksTab.jamTracks.featured" :key="track.title" class="flex-1 group cursor-pointer">
          <div class="overflow-hidden mb-2">
            <img :src="track.image" :alt="track.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-1">{{ track.key }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SONG TRACKS tab -->
  <div v-else-if="activeTab === 'Song Tracks'" class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3">
        <li v-for="link in ['All Song Tracks', 'Classic Rock', 'Blues', 'Metal', 'Pop']" :key="link">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured Song Tracks</p>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="track in backingTracksTab.songTracks" :key="track.title" class="group cursor-pointer">
          <div class="overflow-hidden mb-2">
            <img :src="track.image" :alt="track.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-0.5">{{ track.artist }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- VIDEO JAMS + NEW tabs -->
  <div v-else class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3">
        <li v-for="link in ['All Video Jams']" :key="link">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="track in backingTracksTab.featured" :key="track.title" class="group cursor-pointer">
          <div class="overflow-hidden mb-2">
            <img :src="track.image" :alt="track.title" class="w-full aspect-[16/9] object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold">{{ track.title }}</p>
          <p class="text-white/40 text-xs mt-0.5">{{ track.style }}</p>
        </div>
      </div>
    </div>
  </div>

<div class="flex justify-end px-12 pb-6">
  <a href="/backing-tracks" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Backing Tracks →</a>
</div>

</div>

<!-- ===================== LEARNING PATHS MENU ===================== -->
<div v-else-if="type === 'learning-paths'">

  <div class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3">
        <li>
  <RouterLink to="/learning-paths" class="text-white/60 hover:text-white text-sm transition duration-200">All Learning Paths</RouterLink>
</li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured Paths</p>
      <div class="flex gap-6">
        <div
          v-for="path in learningPathsTab.featured"
          :key="path.title"
          class="flex-1 group cursor-pointer"
        >
          <div class="overflow-hidden mb-3">
            <img :src="path.image" :alt="path.title" class="w-full aspect-video object-cover group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-sm font-semibold leading-snug mb-1">{{ path.title }}</p>
          <p class="text-white/40 text-xs">{{ path.tutor }}</p>
        </div>
      </div>
    </div>
  </div>

<div class="flex justify-end px-12 pb-6">
  <RouterLink to="/learning-paths" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Learning Paths →</RouterLink>
</div>
</div>

<!-- ===================== TUTORS MENU ===================== -->
<div v-else-if="type === 'tutors'">

  <!-- FEATURED tab -->
  <div class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3">
        <li>
  <RouterLink to="/tutors" class="text-white/60 hover:text-white text-sm transition duration-200">All Tutors</RouterLink>
</li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured Tutors</p>
      <div class="flex gap-6">
        

 
        <div
          v-for="tutor in tutorsMenuTab.featured"
          :key="tutor.name"
          class="flex-1 group cursor-pointer"
        >
          <div class="overflow-hidden mb-3">
            <img :src="tutor.image" :alt="tutor.name" class="w-full aspect-square object-cover object-top group-hover:scale-105 transition duration-500" />
          </div>
          <p class="text-white text-xs font-semibold mb-1">{{ tutor.name }}</p>
          <p class="text-white/40 text-xs">{{ tutor.lessons }} lessons</p>
        </div>
      </div>
    </div>
  </div>

<div class="flex justify-end px-12 pb-6">
  <RouterLink to="/tutors" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Tutors →</RouterLink>
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
const coursesTabs = ['Featured', 'New', 'Classic Albums', 'Technique', 'Song Courses', 'Beginners', 'Learning Paths', 'Licks', 'Most Watched']
const backingTracksTabs = ['Featured', 'Genres', 'Jam Tracks', 'Song Tracks', 'Video Jams']
const learningPathsTabs = ['Featured', 'By Level', 'By Style']

const tabs = computed(() => {
  if (props.type === 'lessons') return lessonsTabs
  if (props.type === 'backing-tracks') return backingTracksTabs
  if (props.type === 'learning-paths') return learningPathsTabs
  if (props.type === 'tutors') return tutorsTabs
  return coursesTabs
})

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
  { name: 'AC/DC', lessons: 24, image: '/artist-acdc.jpg' },
  { name: 'Black Sabbath', lessons: 18, image: '/artist-blacksabbath.jpg' },
  { name: 'Eagles', lessons: 14, image: '/artist-eagles.jpg' },
  { name: 'Eric Clapton', lessons: 31, image: '/artist-ericclapton.jpg' },
  { name: 'Foo Fighters', lessons: 12, image: '/artist-foofighters.jpg' },
  { name: "Guns N' Roses", lessons: 27, image: '/artist-gunsnroses.jpg' },
  { name: 'Jimi Hendrix', lessons: 22, image: '/artist-jimihendrix.jpg' },
  { name: 'Led Zeppelin', lessons: 19, image: '/artist-ledzeppelin.jpg' },
  { name: 'Pink Floyd', lessons: 16, image: '/artist-pinkfloyd.jpg' },
  { name: 'Metallica', lessons: 33, image: '/artist-metallica.jpg' },
  { name: 'Iron Maiden', lessons: 15, image: '/artist-ironmaiden.jpg' },
  { name: 'Linkin Park', lessons: 11, image: '/artist-linkinpark.jpg' },
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
  { title: 'Neil Young', tutor: 'Rich Shaw', image: '/hero-artist_Neil_Young.jpg' },
  { title: 'Slash', tutor: 'Danny Gill', image: '/hero-artist_Slash.jpg' },
  { title: 'Sting', tutor: 'Jamie Humphries', image: '/hero-artist_Sting.jpg' },
],

  tutors: [
  { name: 'Danny Gill', lessons: 187, image: '/hero-tutor_Danny_Gill.jpg' },
  { name: 'Edoardo Taddei', lessons: 74, image: '/hero-tutor_Edoardo_Taddei.jpg' },
  { name: 'Eliza Lee', lessons: 45, image: '/hero-tutor_Eliza_Lee.jpg' },
  { name: 'Jamie Humphries', lessons: 203, image: '/hero-tutor_Jamie_Humphries.jpg' },
  { name: 'Nick Jennison', lessons: 118, image: '/hero-tutor_Nick_Jennison_2.jpg' },
  { name: 'Rich Shaw', lessons: 89, image: '/hero-tutor_Rich_Shaw.jpg' },
  { name: 'Sam Bell', lessons: 214, image: '/hero-tutor_Sam_Bell.jpg' },
],

genres: ['Classic Rock', "80's Rock", 'Rock', 'Blues', 'Metal', 'Acoustic', 'Country', 'Fusion', 'Jazz', 'Pop'],

genreFeatures: [
  {
    name: 'Classic Rock',
    lessons: [
      { title: 'Smoke on the Water', tutor: 'Danny Gill', image: '/hero-artist_Deep_Purple.jpg' },
      { title: 'Hotel California', tutor: 'Rich Shaw', image: '/hero-artist_Eagles.jpg' },
    ]
  },
  {
    name: "80's Rock",
    lessons: [
      { title: "Sweet Child O'Mine", tutor: 'Danny Gill', image: '/hero-artist_Guns_N_Roses.jpg' },
      { title: 'Pour Some Sugar on Me', tutor: 'Jamie Humphries', image: '/hero-artist_Def_Leppard.jpg' },
    ]
  },
  {
    name: 'Blues',
    lessons: [
      { title: 'Pride and Joy', tutor: 'Danny Gill', image: '/hero-artist_Stevie_Ray_Vaughan.jpg' },
      { title: 'The Thrill is Gone', tutor: 'Sam Bell', image: '/hero-artist_BB_King.jpg' },
    ]
  },
  {
    name: 'Metal',
    lessons: [
      { title: 'Enter Sandman', tutor: 'Jamie Humphries', image: '/hero-artist_Metallica.jpg' },
      { title: 'Master of Puppets', tutor: 'Danny Gill', image: '/hero-artist_Metallica_3.jpg' },
    ]
  },
],
}

const tabContent = {
'Featured': {
  layout: 'portrait',
  browseLinks: ['All Courses', 'Latest', 'Most Popular'],
  genres: ['Rock', 'Metal', 'Blues', 'Acoustic'],
  featured: [
    { title: 'The Extremist', tutor: 'Danny Gill', image: '/course-1.jpg' },
    { title: 'Are You Experienced', tutor: 'Danny Gill', image: '/course-2.jpg' },
    { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
    { title: 'Hotel California', tutor: 'Danny Gill', image: '/course-5.jpg' },
    { title: 'Dark Side of the Moon', tutor: 'Jamie Humphries', image: '/course-6.jpg' },
    { title: 'The Number Of The Beast', tutor: 'Danny Gill', image: '/course-10.jpg' },
     { title: 'Dr. Feelgood', tutor: 'Danny Gill', image: '/course-3.jpg' },
  ]
},

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
      { title: 'Metallica - The Black Album', tutor: 'Jamie Humphries', image: '/course-7.jpg' },
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
      { title: 'Highway to Hell', tutor: 'Danny Gill', image: '/course-4.jpg' },
    ]
  },
  'Learning Paths': {
    layout: 'landscape',
    browseLinks: ['All Learning Paths'],
    genres: [],
    featured: [
      { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', image: '/learningpath-1.jpg' },
      { title: '2 Week Technique Builder', tutor: 'Sam Bell', image: '/learningpath-2.jpg' },
      { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', image: '/learningpath-3.jpg' },
    ]
  }
}

const backingTracksTab = {
  browseLinks: ['All Backing Tracks', 'Most Popular'],
  genres: ['Rock', 'Blues', 'Metal', 'Jazz', 'Fusion', 'Funk', 'Acoustic', 'Pop', 'Classic Rock'],
  featured: [
    { title: 'Blues Jam in A Minor', key: 'A Minor', style: 'Blues', image: '/jam-tracks/hero-artist_BB_King.jpg' },
    { title: 'Classic Rock Soloing', key: 'E Minor', style: 'Rock', image: '/jam-tracks/hero-artist_Deep_Purple.jpg' },
    { title: 'Metal Rhythm Track', key: 'D Minor', style: 'Metal', image: '/jam-tracks/hero-artist_Metallica.jpg' },
    { title: 'Funk Groove Jam', key: 'G Minor', style: 'Funk', image: '/jam-tracks/hero-artist_Stevie_Ray_Vaughan.jpg' },
  ],
  jamTracks: {
    keys: ['A Minor', 'E Minor', 'G Major', 'D Major', 'C Major'],
    types: ['Pentatonic', 'Dorian', 'Mixolydian', 'Blues', 'Fusion', 'Fast', 'Slow'],
    featured: [
      { title: 'Minor Pentatonic Jam', key: 'A Minor', image: '/jam-tracks/hero-artist_BB_King.jpg' },
      { title: 'Dorian Groove', key: 'E Dorian', image: '/jam-tracks/hero-artist_Carlos_Santana.jpg' },
      { title: 'Blues Shuffle', key: 'G Major', image: '/jam-tracks/hero-artist_Stevie_Ray_Vaughan.jpg' },
    ]
  },
  songTracks: [
    { title: 'Sweet Child O Mine', artist: "Guns N' Roses", image: '/jam-tracks/hero-artist_Guns_N_Roses.jpg' },
    { title: 'Smoke on the Water', artist: 'Deep Purple', image: '/jam-tracks/hero-artist_Deep_Purple.jpg' },
    { title: 'Eagles Medley', artist: 'Eagles', image: '/jam-tracks/hero-artist_Eagles.jpg' },
    { title: 'Nothing Else Matters', artist: 'Metallica', image: '/jam-tracks/hero-artist_Metallica.jpg' },
  ]
}

const learningPathsTab = {
  browseLinks: ['All Learning Paths'],
  levels: ['Beginner', 'Intermediate', 'Advanced'],
  featured: [
    { title: '2 Week Scales Bootcamp', tutor: 'Sam Bell', level: 'Beginner', image: '/learning-paths/learningpath-1.jpg' },
    { title: '2 Week Technique Builder', tutor: 'Sam Bell', level: 'Intermediate', image: '/learning-paths/learningpath-2.jpg' },
    { title: '10 Classic Rock Songs in 10 Days', tutor: 'Rich Shaw', level: 'Beginner', image: '/learning-paths/learningpath-3.jpg' },
  ]
}

const tutorsTabs = ['Featured']

const tutorsMenuTab = {
  browseLinks: ['All Tutors'],
  featured: [
    { name: 'Danny Gill', lessons: 187, image: '/tutors/hero-tutor_Danny_Gill.jpg' },
    { name: 'Sam Bell', lessons: 214, image: '/tutors/hero-tutor_Sam_Bell.jpg' },
    { name: 'Dave Kilminster', lessons: 156, image: '/tutors/hero-tutor_Dave_Kilminster.jpg' },
    { name: 'Jamie Humphries', lessons: 203, image: '/tutors/hero-tutor_Jamie_Humphries.jpg' },
    { name: 'Guthrie Govan', lessons: 91, image: '/tutors/hero-tutor_Guthrie_Govan.jpg' },
    { name: 'Rich Shaw', lessons: 89, image: '/tutors/hero-tutor_Rich_Shaw.jpg' },
    { name: 'Andy James', lessons: 98, image: '/tutors/hero-tutor_Andy_James.jpg' },
  ]
}

const currentTab = computed(() => {
  return tabContent[activeTab.value] || tabContent['New']
})
</script>