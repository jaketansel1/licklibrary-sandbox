<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MegaMenu from './MegaMenu.vue'

defineProps({
  transparent: {
    type: Boolean,
    default: false
  }
})

const menuOpen = ref(false)

function handleScroll() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <nav
   class="w-full"
  :class="[
    transparent ? 'absolute top-0 left-0 z-50' : 'bg-[#111111]',
    menuOpen && transparent ? 'bg-[#111111]' : ''
  ]"
  >
    <!-- Upper nav -->
    <div class="flex items-center justify-between px-12 py-4">
      <RouterLink to="/">
        <img src="/logo.svg" alt="LickLibrary" class="h-7" />
      </RouterLink>
      <div class="flex items-center gap-4">
        <button class="bg-[#FF9911] hover:bg-[#e88a0f] text-[#09090A] text-sm font-bold px-5 py-3 rounded uppercase tracking-wide">
          JOIN NOW
        </button>
        <button class="text-white text-sm font-medium hover:text-gray-300 uppercase tracking-wide px-5 py-3 border border-white/20 hover:border-white/50 rounded transition flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          Login
        </button>
      </div>
    </div>

    <!-- Lower nav -->
    <div
  class="relative flex items-center justify-between px-12 py-4 border-t border-white/10"
  :class="transparent && !menuOpen ? '' : 'bg-[#262626]'"
  @mouseleave="menuOpen = false"
>
      <div class="flex items-center gap-8">
        <a href="#" class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest">Home</a>
        <a href="#" class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest">Guitar Lessons</a>

        <!-- Guitar Courses trigger only -->
        
          <a href="#"
     class="text-sm font-medium uppercase tracking-widest transition duration-200"
     :class="menuOpen ? 'text-brand' : 'text-white/60 hover:text-white'"
     @mouseenter="menuOpen = true"
    >Guitar Courses</a>

        <a href="#" class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest">Backing Tracks</a>
        <RouterLink to="/learning-paths" class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest">Learning Paths</RouterLink>
        <a href="#" class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest">Blog</a>
      </div>
      <div class="text-white/60 hover:text-white text-sm font-medium uppercase tracking-widest cursor-pointer">
        Search
      </div>

      <!-- Mega menu sits here so it spans full width -->
      <Transition name="fade">
    <MegaMenu v-if="menuOpen" />
    </Transition>
    </div>

    <!-- Overlay -->
    <div v-if="menuOpen" class="fixed inset-0 bg-black/60 z-30 pointer-events-none top-[132px]"></div>

  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.20s ease, transform 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>