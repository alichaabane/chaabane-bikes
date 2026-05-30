<script setup lang="ts">
import { CONTACT } from '~/composables/siteData'

const { t } = useI18n()

const nav = computed(() => [
  { href: '#home', label: t('nav.home') },
  { href: '#bikes', label: t('nav.bikes') },
  { href: '#categories', label: t('nav.categories') },
  { href: '#about', label: t('nav.about') },
  { href: '#contact', label: t('nav.contact') }
])

const whatsappHref = `https://wa.me/${CONTACT.phoneE164.replace('+', '')}`
const phoneHref = `tel:${CONTACT.phoneE164}`
</script>

<template>
  <footer class="border-t border-white/5 bg-bcb-bg-2/50 py-10">
    <AppContainer>
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <AppLogo />
          <p class="mt-4 max-w-sm text-sm text-slate-300/90">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <div>
          <div class="text-sm font-semibold">{{ t('footer.navigation') }}</div>
          <div class="mt-3 grid gap-2">
            <a v-for="i in nav" :key="i.href" :href="i.href" class="text-sm text-slate-300 hover:text-white">
              {{ i.label }}
            </a>
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold">{{ t('footer.contact') }}</div>
          <div class="mt-3 grid gap-2 text-sm text-slate-300">
            <div>{{ CONTACT.addressLine }}</div>
            <a :href="phoneHref" class="hover:text-white">{{ CONTACT.phoneDisplay }}</a>
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="hover:text-white">
              WhatsApp
            </a>
            <!-- TODO: Add real Facebook URL. -->
            <a href="#" class="hover:text-white">{{ t('footer.facebook') }}</a>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {{ new Date().getFullYear() }} Ben Chaaben BIKES</div>
        <div>{{ t('footer.rights') }}</div>
      </div>
    </AppContainer>
  </footer>
</template>

