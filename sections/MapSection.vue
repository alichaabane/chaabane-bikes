<script setup lang="ts">
import { CONTACT, getMapsEmbedSrc } from '~/composables/siteData'

const { t } = useI18n()

const embedSrc = computed(() => getMapsEmbedSrc())
</script>

<template>
  <section id="map" class="border-t border-white/5 bg-bcb-bg-2/40 py-14 md:py-20">
    <AppContainer>
      <Reveal>
        <SectionHeading :title="t('map.title')" :subtitle="t('map.subtitle')" />
      </Reveal>

      <Reveal :delay-ms="120">
        <div class="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-bcb-card/70 shadow-glow">
          <div class="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div class="text-sm font-medium text-slate-200">{{ CONTACT.addressLine }}</div>
            <AppButton
              as="a"
              :href="CONTACT.mapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              {{ t('map.open') }}
            </AppButton>
          </div>

          <div class="relative aspect-[16/10] bg-black/40 md:aspect-[21/9]">
            <iframe
              class="absolute inset-0 h-full w-full"
              :src="embedSrc"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :title="t('map.iframeTitle')"
              allowfullscreen
            />
          </div>
        </div>
      </Reveal>
    </AppContainer>
  </section>
</template>

