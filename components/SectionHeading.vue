<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}>()
</script>

<template>
  <div :class="center ? 'text-center' : 'text-left'">
    <div v-if="eyebrow" class="text-xs font-semibold uppercase tracking-widest text-bcb-green/90">
      {{ eyebrow }}
    </div>
    <h2 class="mt-2 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 max-w-2xl text-pretty text-sm text-slate-300/90 md:text-base" :class="center && 'mx-auto'">
      {{ subtitle }}
    </p>
  </div>
</template>

