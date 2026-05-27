<template>
  <RouterLink
    :to="`/learning-paths/${props.path.id}`"
    class=" overflow-hidden group cursor-pointer hover:border-white/0 border border-white/0 transition duration-200 flex flex-col no-underline"
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
    <div class="pt-5 flex flex-col gap-3 flex-1">
      <h3 class="font-heavy text-xl leading-snug text-white">{{ props.path.title }}</h3>
      <p class="text-white/40 text-xs uppercase tracking-wide">{{ props.path.tutor }}</p>

      <div class="flex gap-2">
        <span class="text-xs uppercase tracking-wide font-semibold px-3 py-1 bg-white/10 text-white/60">
          {{ props.path.genre }}
        </span>
        <span class="text-xs uppercase tracking-wide font-semibold px-3 py-1 bg-white/10 text-white/60">
          {{ props.path.level }}
        </span>
      </div>

      <p class="text-white/60 text-sm leading-relaxed flex-1">{{ props.path.description }}</p>

      <div class="pt-2 pb-1">
        <button class="border border-white/20 text-white/60 text-sm uppercase tracking-wide font-semibold px-6 py-3 w-full transition duration-200
  group-hover:bg-brand group-hover:border-brand group-hover:text-white">
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