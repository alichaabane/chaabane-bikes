<script setup lang="ts">
import { CONTACT } from '~/composables/siteData'

const { t, locale, locales, setLocale } = useI18n()

const isMenuOpen = ref(false)

const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))

const navItems = computed(() => [
  { href: '#home', label: t('nav.home') },
  { href: '#bikes', label: t('nav.bikes') },
  { href: '#categories', label: t('nav.categories') },
  { href: '#about', label: t('nav.about') },
  { href: '#contact', label: t('nav.contact') }
])

watch(locale, () => {
  isMenuOpen.value = false
})

function switchLocale(code: string) {
  if (code !== locale.value) setLocale(code)
}

const whatsappHref = computed(() => `https://wa.me/${CONTACT.phoneE164.replace('+', '')}`)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-bcb-bg/70 backdrop-blur">
    <AppContainer>
      <div class="flex h-16 items-center justify-between gap-4">
        <a href="#home" class="shrink-0">
          <AppLogo />
        </a>

        <nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a
            v-for="item in navItems"
            :key="item.href"
            class="text-sm text-slate-200/90 hover:text-white"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="hidden items-center gap-2 md:flex">
          <div class="flex items-center rounded-md border border-white/10 bg-white/5 p-1">
            <button
              v-for="l in locales"
              :key="l.code"
              type="button"
              class="h-8 rounded px-2.5 text-xs font-semibold tracking-wide"
              :class="l.code === locale ? 'bg-bcb-green text-bcb-bg' : 'text-slate-200 hover:bg-white/5'"
              @click="switchLocale(l.code)"
              :aria-label="`Switch language to ${l.code}`"
            >
              {{ l.code.toUpperCase() }}
            </button>
          </div>

          <AppButton
            as="a"
            :href="whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <span class="inline-flex size-4 items-center justify-center rounded-sm bg-bcb-bg/20" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.4A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8.8 9.3c.4-1 1.1-1 1.5-.9.3.1.6 1 0 1.8-.2.2-.2.4 0 .6 1 1.7 2.3 3 4 3.9.2.1.4.1.6-.1.8-.6 1.7-.3 1.8 0 .1.4.1 1.1-.9 1.5-1 .4-3.1.3-6-2.4-2.7-2.6-2.7-4.9-2-6.4Z" />
              </svg>
            </span>
            {{ t('actions.whatsapp') }}
          </AppButton>
        </div>

        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 md:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Open menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </AppContainer>

    <div v-if="isMenuOpen" class="border-t border-white/5 bg-bcb-bg-2/80 backdrop-blur md:hidden">
      <AppContainer>
        <div class="grid gap-3 py-4" :class="dir === 'rtl' ? 'text-right' : 'text-left'">
          <a
            v-for="item in navItems"
            :key="item.href"
            class="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
            :href="item.href"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </a>

          <div class="mt-1 flex items-center gap-2">
            <div class="flex flex-1 items-center rounded-md border border-white/10 bg-white/5 p-1">
              <button
                v-for="l in locales"
                :key="l.code"
                type="button"
                class="h-9 flex-1 rounded px-2.5 text-xs font-semibold tracking-wide"
                :class="l.code === locale ? 'bg-bcb-green text-bcb-bg' : 'text-slate-200 hover:bg-white/5'"
                @click="switchLocale(l.code)"
              >
                {{ l.code.toUpperCase() }}
              </button>
            </div>

            <AppButton
              as="a"
              :href="whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              {{ t('actions.whatsapp') }}
            </AppButton>
          </div>
        </div>
      </AppContainer>
    </div>
  </header>
</template>

