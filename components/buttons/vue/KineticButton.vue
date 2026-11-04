<!--
  ============================================================================
  COMPONENTESXD — KINETIC BUTTON (VUE 3)
  Archivo: components/buttons/vue/KineticButton.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref } from 'vue';
import '../css-scss/buttons.css';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'shimmer' | 'glass' | 'brutalist';
    loading?: boolean;
    magnetic?: boolean;
  }>(),
  {
    variant: 'primary',
    loading: false,
    magnetic: true
  }
);

const tx = ref(0);
const ty = ref(0);

function onMove(e: MouseEvent) {
  if (!props.magnetic) return;
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  tx.value = (e.clientX - rect.left - rect.width / 2) * 0.25;
  ty.value = (e.clientY - rect.top - rect.height / 2) * 0.25;
}

function onLeave() {
  tx.value = 0;
  ty.value = 0;
}
</script>

<template>
  <button
    class="cxd-btn"
    :class="[`cxd-btn--${variant}`, { 'is-loading': loading }]"
    :style="{ transform: tx || ty ? `translate3d(${tx}px, ${ty}px, 0)` : undefined }"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <span class="cxd-btn__spinner" />
    <slot />
  </button>
</template>

