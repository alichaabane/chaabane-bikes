<script setup lang="ts">
const { t } = useI18n()
const { categories } = useSiteData()
</script>

<template>
  <section id="categories" class="border-t border-white/5 bg-bcb-bg-2/40 py-14 md:py-20">
    <AppContainer>
      <Reveal>
        <SectionHeading :title="t('categories.title')" :subtitle="t('categories.subtitle')" />
      </Reveal>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal
          v-for="(c, idx) in categories"
          :key="c.id"
          as="a"
          :href="c.anchor"
          :delay-ms="80 * idx"
          class="group overflow-hidden rounded-xl border border-white/10 bg-bcb-card/70 transition hover:border-bcb-green/30 hover:bg-bcb-card"
        >
          <div class="relative aspect-[16/10]">
            <div class="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-bcb-green/10" aria-hidden="true" />
            <img :src="c.imageSrc" :alt="t(c.titleKey)" class="h-full w-full object-cover opacity-80 transition group-hover:scale-[1.02]" />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-base font-semibold">{{ t(c.titleKey) }}</div>
                <div class="mt-1 text-sm text-slate-300/90">
                  {{ t(c.descriptionKey) }}
                </div>
              </div>
              <div class="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-bcb-green transition group-hover:border-bcb-green/30">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>

            <div class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bcb-green">
              {{ t('actions.discover') }}
              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </AppContainer>
  </section>
</template>
