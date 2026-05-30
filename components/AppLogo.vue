<script setup lang="ts">
defineProps<{ compact?: boolean }>()
</script>

<template>
  <div class="flex items-center gap-2.5">
    <div
      class="grid size-9 place-items-center rounded-md bg-bcb-green/15 text-bcb-green shadow-[0_0_0_1px_rgba(126,211,33,0.25)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
        <path d="M17 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
        <path d="M7 13h4l3-6h3" />
        <path d="M11 13l2 4" />
        <path d="M9 9l2 4" />
      </svg>
    </div>
    <div v-if="!compact" class="leading-tight">
      <div class="text-sm font-semibold tracking-wide">Ben Chaaben <span class="text-bcb-green">BIKES</span></div>
      <div class="text-xs text-slate-400">Metlaoui, Tunisia</div>
    </div>
  </div>
</template>

