<script setup lang="ts">
const { locale } = useI18n()

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: dir.value
  }
}))
</script>

<template>
  <div class="min-h-dvh bg-bcb-bg text-slate-100">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
