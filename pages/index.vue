<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('home.title'),
  description: t('home.description')
})
</script>

<template>
  <div>
    <AppHeader />
    <HeroSection />
  </div>
</template>

