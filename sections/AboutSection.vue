<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-14 md:py-20">
    <AppContainer>
      <div class="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading :title="t('about.title')" :subtitle="t('about.subtitle')" />

          <div class="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-bcb-card/70 p-5">
            <div class="flex items-center justify-between">
              <div class="text-sm text-slate-300">{{ t('about.stats.followers') }}</div>
              <div class="text-lg font-semibold text-white">3.4K+</div>
            </div>
            <div class="h-px bg-white/5" />
            <div class="flex items-center justify-between">
              <div class="text-sm text-slate-300">{{ t('about.stats.experience') }}</div>
              <div class="text-lg font-semibold text-white">1+</div>
            </div>
            <div class="h-px bg-white/5" />
            <div class="flex items-center justify-between">
              <div class="text-sm text-slate-300">{{ t('about.stats.commitment') }}</div>
              <div class="text-lg font-semibold text-white">100%</div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-bcb-card/80 via-bcb-card to-black/30 p-6 shadow-glow">
          <div class="text-sm font-semibold text-white">{{ t('about.cardTitle') }}</div>
          <p class="mt-3 text-sm text-slate-300/90">
            {{ t('about.body') }}
          </p>

          <div class="mt-6 grid gap-3">
            <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="size-2 rounded-full bg-bcb-green" aria-hidden="true" />
              <div class="text-sm text-slate-200">{{ t('about.bullets.selection') }}</div>
            </div>
            <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="size-2 rounded-full bg-bcb-green" aria-hidden="true" />
              <div class="text-sm text-slate-200">{{ t('about.bullets.guidance') }}</div>
            </div>
            <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="size-2 rounded-full bg-bcb-green" aria-hidden="true" />
              <div class="text-sm text-slate-200">{{ t('about.bullets.afterSales') }}</div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

