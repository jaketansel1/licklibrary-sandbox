<template>
  <!-- MegaMenu.vue
    Props: type (String) — 'lessons' | 'courses' | 'backing-tracks' | 'learning-paths' | 'tutors'
    Triggered by: AppNav.vue @mouseenter on each nav item
    Data source: ../../data/megaMenuData.js
    PROTOTYPE — image paths, hrefs and mock data need real implementation
  -->
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
  <a v-if="activeTab === 'Artists'" href="/artists" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Artists →</a>
  <a v-else-if="activeTab === 'Tutors'" href="/tutors" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Tutors →</a>
  <a v-else href="/guitar-lessons" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Guitar Lessons →</a>
</div>
    </div>

    <!-- ===================== GUITAR COURSES MENU ===================== -->
<div v-else-if="type === 'courses'">

  <!-- GENRE tab -->
  <div v-if="activeTab === 'Genre'" class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3">
        <li v-for="link in courseGenreTab.browseLinks" :key="link">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="w-48 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-5">Genres</p>
      <ul class="space-y-3">
        <li v-for="genre in courseGenreTab.genres" :key="genre">
          <a href="#" class="text-white/70 hover:text-white text-sm font-medium transition duration-200">{{ genre }}</a>
        </li>
      </ul>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex gap-10">
  <div v-for="genre in courseGenreTab.genreFeatures" :key="genre.name" class="flex-1">
    <p class="text-brand text-xs uppercase tracking-widest mb-4">{{ genre.name }}</p>
    <div class="flex gap-4">
      <div v-for="course in genre.courses" :key="course.title" class="w-42 shrink-0 cursor-pointer group">
  <div class="overflow-hidden mb-3">
    <img :src="course.image" :alt="course.title" class="w-full aspect-[2/3] max-h-64 object-cover group-hover:scale-105 transition duration-500" />
  </div>
        <p class="text-white text-xs font-semibold leading-snug">{{ course.title }}</p>
        <p class="text-white/40 text-xs mt-0.5">{{ course.tutor }}</p>
      </div>
    </div>
  </div>
</div>
  </div>

  <!-- ALL OTHER TABS -->
  <div v-else class="flex px-12 py-8 gap-10">
    <div class="w-40 shrink-0">
      <p class="text-brand text-xs uppercase tracking-widest mb-4">Browse</p>
      <ul class="space-y-3 mb-8">
        <li v-for="link in currentTab.browseLinks" :key="link">
          <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
        </li>
      </ul>
      <template v-if="currentTab.techniqueLinks">
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Technique</p>
        <ul class="space-y-3 mb-8">
          <li v-for="link in currentTab.techniqueLinks" :key="link">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
          </li>
        </ul>
      </template>
      <template v-if="currentTab.seriesLinks">
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Series</p>
        <ul class="space-y-3 mb-8">
          <li v-for="link in currentTab.seriesLinks" :key="link">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ link }}</a>
          </li>
        </ul>
      </template>
      <template v-if="currentTab.genres.length > 0">
        <p class="text-brand text-xs uppercase tracking-widest mb-4">Genre</p>
        <ul class="space-y-3">
          <li v-for="genre in currentTab.genres" :key="genre">
            <a href="#" class="text-white/60 hover:text-white text-sm transition duration-200">{{ genre }}</a>
          </li>
        </ul>
      </template>
    </div>
    <div class="w-px bg-white/10 shrink-0"></div>
    <div class="flex-1">
      <p class="text-brand text-xs uppercase tracking-widest mb-6">Featured</p>
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
    <a v-if="activeTab === 'Classic Albums'" href="/guitar-courses/classic-albums" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Classic Albums →</a>
    <a v-else-if="activeTab === 'Technique'" href="/guitar-courses/technique" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Technique Courses →</a>
    <a v-else-if="activeTab === 'Song Courses'" href="/guitar-courses/song-courses" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Song Courses →</a>
    <a v-else-if="activeTab === 'Beginners'" href="/guitar-courses/beginners" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Beginner Courses →</a>
    <a v-else-if="activeTab === 'Learning Paths'" href="/learning-paths" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Learning Paths →</a>
    <a v-else-if="activeTab === 'Licks'" href="/guitar-courses/licks" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Licks Courses →</a>
    <a v-else href="/guitar-courses" class="text-white/40 hover:text-white text-xs uppercase tracking-widest transition duration-200">View all Guitar Courses →</a>
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
        <li v-for="link in ['All Song Tracks', 'Classic Rock', 'Blues', 'Metal', `80's Rock`]" :key="link">
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
import {
  lessonsTab,
  tabContent,
  backingTracksTab,
  learningPathsTab,
  tutorsTabs,
  tutorsMenuTab,
  courseGenreTab,
} from '../../data/megaMenuData.js'

const props = defineProps({
  type: {
    type: String,
    default: 'courses'
  }
})

const lessonsTabs = ['Featured', 'New', 'Song Lessons', 'Genre', 'Artists', 'Tutors', 'Most Watched']
const coursesTabs = ['Featured', 'New', 'Classic Albums', 'Technique', 'Song Courses', 'Beginners', 'Learning Paths', 'Licks', 'Genre', 'Most Watched']
const backingTracksTabs = ['Featured', 'Genres', 'Jam Tracks', 'Song Tracks', 'Video Jams']

const tabs = computed(() => {
  if (props.type === 'lessons') return lessonsTabs
  if (props.type === 'backing-tracks') return backingTracksTabs
  if (props.type === 'tutors') return tutorsTabs
  return coursesTabs
})

const activeTab = ref('New')

const currentTab = computed(() => {
  return tabContent[activeTab.value] || tabContent['New']
})
</script>