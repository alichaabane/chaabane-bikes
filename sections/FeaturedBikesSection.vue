<script setup lang="ts">
import { buildWhatsAppLink } from '~/composables/whatsapp'

const { t } = useI18n()
const { featuredBikes } = useSiteData()

function bikeWhatsAppHref(bikeName: string) {
  return buildWhatsAppLink(
    t('bikes.whatsappMessage', {
      name: bikeName
    })
  )
}
</script>

<template>
  <section id="bikes" class="py-14 md:py-20">
    <AppContainer>
      <SectionHeading :title="t('bikes.title')" :subtitle="t('bikes.subtitle')" />

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="b in featuredBikes"
          :key="b.id"
          class="group overflow-hidden rounded-xl border border-white/10 bg-bcb-card/70 transition hover:border-bcb-green/30 hover:bg-bcb-card"
          :href="bikeWhatsAppHref(t(b.nameKey))"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="relative aspect-[16/11]">
            <div class="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/10 to-bcb-green/10" aria-hidden="true" />
            <img :src="b.imageSrc" :alt="t(b.nameKey)" class="h-full w-full object-cover opacity-85 transition group-hover:scale-[1.02]" />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="text-base font-semibold">{{ t(b.nameKey) }}</div>
              </div>
              <div class="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-bcb-green transition group-hover:border-bcb-green/30">
                <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.4A8.5 8.5 0 1 1 20.5 11.5Z" />
                  <path d="M8.8 9.3c.4-1 1.1-1 1.5-.9.3.1.6 1 0 1.8-.2.2-.2.4 0 .6 1 1.7 2.3 3 4 3.9.2.1.4.1.6-.1.8-.6 1.7-.3 1.8 0 .1.4.1 1.1-.9 1.5-1 .4-3.1.3-6-2.4-2.7-2.6-2.7-4.9-2-6.4Z" />
                </svg>
              </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tagKey in b.tagKeys"
                :key="tagKey"
                class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
              >
                {{ t(tagKey) }}
              </span>
            </div>

            <div class="mt-5">
              <AppButton as="span" variant="outline" size="sm" class="w-full">
                {{ t('bikes.cta') }}
              </AppButton>
            </div>
          </div>
        </a>
      </div>
    </AppContainer>
  </section>
</template>
