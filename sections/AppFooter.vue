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
const facebookHref = 'https://www.facebook.com/profile.php?id=100086169843001'
const linkedinHref = 'https://www.linkedin.com/in/ali-chaabane/'
const sitemapHref = '/sitemap.xml'
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
            <a :href="sitemapHref" target="_blank" rel="noopener noreferrer" class="text-sm text-slate-300 hover:text-white">
              {{ t('footer.sitemap') }}
            </a>
          </div>
        </div>

        <div>
          <div class="text-sm font-semibold">{{ t('footer.contact') }}</div>
          <div class="mt-3 grid gap-3 text-sm text-slate-300">
            <div class="flex items-start gap-2.5">
              <span class="mt-0.5 inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-bcb-green">
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <path d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </span>
              <div class="leading-snug">{{ CONTACT.addressLine }}</div>
            </div>

            <a :href="phoneHref" class="flex items-center gap-2.5 hover:text-white">
              <span class="inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-bcb-green">
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2c-2.2-.2-4.2-1-6-2.2a20.2 20.2 0 0 1-6.2-6.2C6.3 11.6 5.5 9.6 5.3 7.4A2 2 0 0 1 7.3 5.2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"
                  />
                </svg>
              </span>
              <span>{{ CONTACT.phoneDisplay }}</span>
            </a>

            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 hover:text-white">
              <span class="inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-bcb-green">
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.4A8.5 8.5 0 1 1 20.5 11.5Z" />
                  <path d="M8.8 9.3c.4-1 1.1-1 1.5-.9.3.1.6 1 0 1.8-.2.2-.2.4 0 .6 1 1.7 2.3 3 4 3.9.2.1.4.1.6-.1.8-.6 1.7-.3 1.8 0 .1.4.1 1.1-.9 1.5-1 .4-3.1.3-6-2.4-2.7-2.6-2.7-4.9-2-6.4Z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>

            <a :href="facebookHref" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 hover:text-white">
              <span class="inline-flex size-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-bcb-green">
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z" />
                </svg>
              </span>
              <span>{{ t('footer.facebook') }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {{ new Date().getFullYear() }} Ben Chaaben BIKES</div>
        <div class="flex flex-wrap items-center gap-2">
          <span>{{ t('footer.rights') }}</span>
          <span class="text-white/20">|</span>
          <span>
            {{ t('footer.developedBy') }}
            <a
              :href="linkedinHref"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-slate-200 hover:text-white"
            >
              Ali Chaabane
            </a>
          </span>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>
