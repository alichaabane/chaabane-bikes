<script setup lang="ts">
const { t } = useI18n()
const { values } = useSiteData()

function iconPath(icon: string) {
  switch (icon) {
    case 'badge':
      return 'M12 2l3 5 5 1-3.5 4.2L17 18l-5-2.1L7 18l.5-5.8L4 8l5-1 3-5Z'
    case 'user':
      return 'M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 10a7 7 0 0 1 14 0'
    case 'brand':
      return 'M4 13l6-9 5 7 5-2-4 12H8L4 13Z'
    case 'wrench':
      return 'M14.7 6.3a4 4 0 0 0-5.7 5.7L3 18l3 3 6-6a4 4 0 0 0 5.7-5.7l-2 2-2.4-.4-.4-2.4 2-2Z'
    case 'tag':
      return 'M20 12l-8 8-10-10V4h6l12 8Z'
    default:
      return 'M12 2v6m0 8v6M4.9 4.9l4.2 4.2m5.8 5.8 4.2 4.2M2 12h6m8 0h6M4.9 19.1l4.2-4.2m5.8-5.8 4.2-4.2'
  }
}
</script>

<template>
  <section class="border-y border-white/5 bg-bcb-bg-2/40 py-14 md:py-20">
    <AppContainer>
      <Reveal>
        <SectionHeading :title="t('why.title')" :subtitle="t('why.subtitle')" />
      </Reveal>

      <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Reveal
          v-for="(item, idx) in values"
          :key="item.titleKey"
          class="rounded-xl border border-white/10 bg-bcb-card/70 p-5 transition hover:border-bcb-green/30 hover:bg-bcb-card"
          :delay-ms="70 * idx"
        >
          <div class="flex items-start gap-4">
            <div class="grid size-11 place-items-center rounded-xl bg-white/5 text-bcb-green">
              <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="iconPath(item.icon)" />
              </svg>
            </div>
            <div>
              <div class="text-base font-semibold">{{ t(item.titleKey) }}</div>
              <div class="mt-1 text-sm text-slate-300/90">{{ t(item.descriptionKey) }}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </AppContainer>
  </section>
</template>
