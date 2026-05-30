<script setup lang="ts">
import { IMAGES } from '~/composables/siteData'
import { CONTACT } from '~/composables/siteData'

const { t, locale } = useI18n()
const { benefits } = useSiteData()

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))

const whatsappHref = computed(() => `https://wa.me/${CONTACT.phoneE164.replace('+', '')}`)
</script>

<template>
  <section id="home" class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-bcb-green/10 blur-3xl" />
      <div class="absolute -bottom-28 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
    </div>

    <AppContainer>
      <div class="grid gap-10 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div class="order-2 md:order-1" :class="dir === 'rtl' ? 'text-right' : 'text-left'">
          <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span class="size-1.5 rounded-full bg-bcb-green" aria-hidden="true" />
            {{ t('hero.kicker') }}
          </p>

          <h1 class="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            <span class="block">{{ t('hero.titleLine1') }}</span>
            <span class="block text-bcb-green">{{ t('hero.titleLine2') }}</span>
          </h1>

          <p class="mt-5 max-w-prose text-pretty text-sm text-slate-300/90 md:text-base">
            {{ t('hero.subtitle') }}
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3" :class="dir === 'rtl' ? 'justify-end' : 'justify-start'">
            <AppButton as="a" href="#bikes">
              {{ t('hero.ctaPrimary') }}
            </AppButton>
            <AppButton as="a" :href="whatsappHref" target="_blank" rel="noopener noreferrer" variant="outline">
              {{ t('hero.ctaWhatsapp') }}
            </AppButton>
          </div>

          <div class="mt-9 grid gap-3 sm:grid-cols-3">
            <div
              v-for="b in benefits"
              :key="b.titleKey"
              class="rounded-lg border border-white/10 bg-bcb-card/70 p-3 shadow-sm"
            >
              <div class="flex items-start gap-3">
                <div class="grid size-9 place-items-center rounded-md bg-white/5 text-bcb-green">
                  <svg v-if="b.icon === 'shield'" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                  <svg v-else-if="b.icon === 'spark'" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
                  </svg>
                  <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-1" />
                    <path d="M4 17a3 3 0 0 0 3 3h1" />
                    <path d="M7 12v4" />
                    <path d="M17 12v4" />
                  </svg>
                </div>
                <div class="text-sm font-medium leading-snug">
                  {{ t(b.titleKey) }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative order-1 md:order-2">
          <div class="absolute -inset-6 rounded-[28px] bg-bcb-green/10 blur-2xl" aria-hidden="true" />
          <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-bcb-card shadow-glow">
            <div class="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-bcb-green/10" aria-hidden="true" />
            <div class="aspect-[4/3]">
              <img
                :src="IMAGES.hero"
                :alt="t('hero.imageAlt')"
                class="h-full w-full object-cover opacity-80"
              />
            </div>
            <div class="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
              <div class="text-sm font-semibold">{{ t('hero.cardTitle') }}</div>
              <div class="mt-1 text-xs text-slate-300">
                {{ t('hero.cardSubtitle') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
