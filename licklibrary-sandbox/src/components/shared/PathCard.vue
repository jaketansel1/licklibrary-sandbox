<template>
  <RouterLink
  :to="`/learning-paths/${props.path.id}`"
  :class="[
  'overflow-hidden group cursor-pointer border transition duration-200 flex flex-col no-underline',
  contained ? 'rounded-xl bg-[#111111] border-white/10' : 'border-white/0'
]"
>
    <!-- Thumbnail -->
    <div class="relative aspect-[2/1]">
      <img
        :src="props.path.image"
        :alt="props.path.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    <!-- Card content -->
    <div :class="['flex flex-col gap-3 flex-1', contained ? 'p-5' : 'pt-5']">
      <h3 class="font-heavy text-xl leading-snug text-white">{{ props.path.title }}</h3>
      <p class="text-white/40 text-xs uppercase tracking-wide">{{ props.path.tutor }}</p>

      <div class="flex gap-2">
        <span class="text-xs uppercase tracking-wide font-semibold px-3 py-1 bg-white/10 text-white/60 rounded">
          {{ props.path.genre }}
        </span>
        <span class="text-xs uppercase tracking-wide font-semibold px-3 py-1 bg-white/10 text-white/60 rounded">
          {{ props.path.level }}
        </span>
      </div>

      <p class="text-white/60 text-sm leading-relaxed flex-1">{{ props.path.description }}</p>

<button :class="['border border-white/20 text-white/60 text-sm uppercase tracking-wide font-semibold px-6 py-3 w-full transition duration-200 group-hover:bg-brand group-hover:border-brand group-hover:text-white mt-2', contained ? 'rounded-lg' : '']">        View Course
      </button>
    </div>

  </RouterLink>
</template>

<script setup>
const props = defineProps({
  path: Object,
  contained: {
    type: Boolean,
    default: false
  }
})
</script>