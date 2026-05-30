<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'button' | 'a'
    href?: string
    variant?: 'primary' | 'ghost' | 'outline'
    size?: 'sm' | 'md'
    target?: string
    rel?: string
  }>(),
  {
    as: 'button',
    variant: 'primary',
    size: 'md'
  }
)
</script>

<template>
  <component
    :is="as"
    :href="href"
    :target="target"
    :rel="rel"
    class="inline-flex items-center justify-center gap-2 rounded-md font-medium transition"
    :class="[
      size === 'sm' ? 'h-9 px-3 text-sm' : 'h-11 px-4 text-sm',
      variant === 'primary' &&
        'bg-bcb-green text-bcb-bg hover:bg-bcb-green/90 shadow-[0_0_0_1px_rgba(126,211,33,0.25),0_12px_30px_rgba(126,211,33,0.12)]',
      variant === 'outline' && 'border border-slate-700 bg-transparent text-slate-100 hover:bg-white/5',
      variant === 'ghost' && 'bg-transparent text-slate-100 hover:bg-white/5'
    ]"
  >
    <slot />
  </component>
</template>

