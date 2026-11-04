<!--
  ============================================================================
  COMPONENTESXD — 05. Full-Width Incident & Maintenance Strip (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/system-banner-strip/SystemBannerStrip.vue
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
    title: '05. Full-Width Incident & Maintenance Strip',
    badge: 'STATUS BAR'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'system-banner-strip', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-system-banner-strip" :data-theme="interfaceTheme">
    <header class="cxd-toasts-system-banner-strip__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-system-banner-strip__body">
      <p>Barra estructural superior para anuncios de mantenimiento, degradación de SLA o nuevas versiones.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
