<script setup lang="ts">
type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const props = withDefaults(
  defineProps<{
    as?: string
    delayMs?: number
    once?: boolean
    direction?: Direction
  }>(),
  {
    as: 'div',
    delayMs: 0,
    once: true,
    direction: 'up'
  }
)

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const prefersReducedMotion = ref(false)
onMounted(() => {
  prefersReducedMotion.value =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const hiddenClass = computed(() => {
  if (props.direction === 'none') return 'opacity-0'
  if (props.direction === 'left') return 'opacity-0 -translate-x-5'
  if (props.direction === 'right') return 'opacity-0 translate-x-5'
  if (props.direction === 'down') return 'opacity-0 -translate-y-5'
  return 'opacity-0 translate-y-5'
})

onMounted(() => {
  if (prefersReducedMotion.value) {
    isVisible.value = true
    return
  }
  if (!el.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        isVisible.value = true
        if (props.once) observer.disconnect()
      }
    },
    { root: null, threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
  )

  observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="will-change-transform"
    :class="isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClass"
    :style="{
      transitionProperty: 'opacity, transform',
      transitionDuration: '700ms',
      transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      transitionDelay: `${delayMs}ms`
    }"
  >
    <slot />
  </component>
</template>

