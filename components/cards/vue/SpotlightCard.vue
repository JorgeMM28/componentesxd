<!--
  ============================================================================
  COMPONENTESXD — SPOTLIGHT BENTO CARD (VUE 3)
  Archivo: components/cards/vue/SpotlightCard.vue
  ============================================================================
-->
<script setup lang="ts">
import '../css-scss/cards.css';

defineProps<{
  tag: string;
  title: string;
  metric: string;
  delta?: string;
  description: string;
}>();

function onMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
  el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
}
</script>

<template>
  <article class="cxd-spotlight-card" @mousemove="onMove">
    <div class="cxd-card-header">
      <span class="cxd-card-tag">{{ tag }}</span>
      <span v-if="delta" class="cxd-card-delta">{{ delta }}</span>
    </div>
    <h4>{{ title }}</h4>
    <div class="cxd-card-metric">{{ metric }}</div>
    <p class="cxd-card-desc">{{ description }}</p>
  </article>
</template>

