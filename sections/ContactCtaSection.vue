<script setup lang="ts">
import { CONTACT } from '~/composables/siteData'

const { t } = useI18n()

const phoneHref = `tel:${CONTACT.phoneE164}`
const whatsappHref = `https://wa.me/${CONTACT.phoneE164.replace('+', '')}`
</script>

<template>
  <section id="contact" class="py-14 md:py-20">
    <AppContainer>
      <Reveal>
        <div class="relative overflow-hidden rounded-2xl border border-bcb-green/20 bg-gradient-to-br from-bcb-card via-bcb-card-2 to-black p-6 shadow-glow md:p-10">
          <div class="pointer-events-none absolute -top-20 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-bcb-green/12 blur-3xl" />

          <div class="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div class="text-2xl font-semibold tracking-tight md:text-3xl">{{ t('contactCta.title') }}</div>
              <p class="mt-3 text-sm text-slate-200/90 md:text-base">
                {{ t('contactCta.subtitle') }}
              </p>

              <div class="mt-6 flex flex-wrap items-center gap-3">
                <AppButton as="a" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
                  {{ t('contactCta.actions.whatsapp') }}
                </AppButton>
                <AppButton as="a" :href="phoneHref" variant="outline">
                  {{ t('contactCta.actions.call') }}
                </AppButton>
                <AppButton as="a" :href="CONTACT.mapsUrl" target="_blank" rel="noopener noreferrer" variant="ghost">
                  {{ t('contactCta.actions.maps') }}
                </AppButton>
              </div>
            </div>

            <div class="rounded-xl border border-white/10 bg-black/30 p-5">
              <div class="text-sm font-semibold">{{ t('contactCta.info.title') }}</div>
              <div class="mt-3 grid gap-2 text-sm text-slate-200">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 inline-block size-2 rounded-full bg-bcb-green" aria-hidden="true" />
                  <div>{{ CONTACT.addressLine }}</div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 inline-block size-2 rounded-full bg-bcb-green" aria-hidden="true" />
                  <div>
                    <a class="hover:text-white" :href="phoneHref">{{ CONTACT.phoneDisplay }}</a>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 inline-block size-2 rounded-full bg-bcb-green" aria-hidden="true" />
                  <div>
                    <a class="hover:text-white" :href="whatsappHref" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </div>
                </div>
                <!-- TODO: Confirm Google Maps URL and embed strategy (static map vs. link). -->
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </AppContainer>
  </section>
</template>
