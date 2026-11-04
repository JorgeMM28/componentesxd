<!--
  ============================================================================
  COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/collapsible-tree-sidebar/CollapsibleTreeSidebar.vue
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
    title: '01. Architectural Tree Sidebar Navigation',
    badge: 'APP SIDEBAR'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'collapsible-tree-sidebar', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-collapsible-tree-sidebar" :data-theme="interfaceTheme">
    <header class="cxd-navigation-collapsible-tree-sidebar__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-collapsible-tree-sidebar__body">
      <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
