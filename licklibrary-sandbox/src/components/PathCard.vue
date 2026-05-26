<template>
  <RouterLink
    :to="`/learning-paths/${props.path.id}`"
    class="bg-[#111111] rounded-xl overflow-hidden group cursor-pointer hover:border-white/10 border border-white/5 transition duration-200 flex flex-col no-underline"
  >
    <!-- Thumbnail -->
    <div class="relative overflow-hidden aspect-video">
      <img
        :src="props.path.image"
        :alt="props.path.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    <!-- Card content -->
    <div class="p-5 flex flex-col gap-3 flex-1">
      <h3 class="font-heavy text-lg leading-snug text-white">{{ props.path.title }}</h3>
      <p class="text-white/40 text-xs uppercase tracking-wide">{{ props.path.tutor }}</p>

      <div class="flex gap-2">
        <span class="text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full bg-white/10 text-white/60">
          {{ props.path.genre }}
        </span>
        <span
          class="text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full"
          :class="{
            'bg-green-500/10 text-green-400': props.path.level === 'Beginner',
            'bg-yellow-500/10 text-yellow-400': props.path.level === 'Intermediate',
            'bg-brand/10 text-brand': props.path.level === 'Advanced'
          }"
        >
          {{ props.path.level }}
        </span>
      </div>

      <p class="text-white/60 text-sm leading-relaxed flex-1">{{ props.path.description }}</p>

      <div class="pt-2 pb-1">
        <button class="border border-white/20 text-white/60 text-sm uppercase tracking-wide font-semibold px-6 py-3 w-full hover:bg-brand hover:border-brand hover:text-white transition duration-200">
          View Course
        </button>
      </div>
    </div>

  </RouterLink>
</template>

<script setup>
const props = defineProps({
  path: Object
})
</script>