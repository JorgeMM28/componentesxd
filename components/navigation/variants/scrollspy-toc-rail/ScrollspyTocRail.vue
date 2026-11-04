<!--
  ============================================================================
  COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/scrollspy-toc-rail/ScrollspyTocRail.vue
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
    title: '05. Technical Documentation Scrollspy Rail',
    badge: 'TOC RAIL'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'scrollspy-toc-rail', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-scrollspy-toc-rail" :data-theme="interfaceTheme">
    <header class="cxd-navigation-scrollspy-toc-rail__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-scrollspy-toc-rail__body">
      <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
