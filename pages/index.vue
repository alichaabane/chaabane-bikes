<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  meta: [
    { name: 'keywords', content: t('seo.keywords') }
  ]
}))

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.description'),
  ogType: 'website',
  ogImage: '/images/hero-bike.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedBikesSection />
      <WhyChooseSection />
      <AboutSection />
      <ContactCtaSection />
      <MapSection />
    </main>
    <AppFooter />
  </div>
</template>
