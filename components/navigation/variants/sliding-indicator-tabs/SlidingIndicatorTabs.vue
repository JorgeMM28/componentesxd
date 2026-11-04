<!--
  ============================================================================
  COMPONENTESXD — 04. Precision Tab Bar with Sliding Hairline (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/sliding-indicator-tabs/SlidingIndicatorTabs.vue
  ============================================================================
-->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';

withDefaults(
  defineProps<{
    title?: string;
    badge?: string;
    interfaceTheme?: string;
  }>(),
  {
    title: '04. Precision Tab Bar with Sliding Hairline',
    badge: 'TABS BAR'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'sliding-indicator-tabs', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-sliding-indicator-tabs" :data-theme="interfaceTheme">
    <header class="cxd-navigation-sliding-indicator-tabs__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-sliding-indicator-tabs__body">
      <p>Pestañas horizontales con línea inferior activa que se desliza suavemente hacia la pestaña seleccionada.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
