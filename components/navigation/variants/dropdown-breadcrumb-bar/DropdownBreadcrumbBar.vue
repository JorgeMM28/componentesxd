<!--
  ============================================================================
  COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (VUE 3 COMPOSITION API)
  Archivo: components/navigation/variants/dropdown-breadcrumb-bar/DropdownBreadcrumbBar.vue
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
    title: '02. Multi-Tenant Breadcrumb + Context Switcher',
    badge: 'BREADCRUMBS'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'dropdown-breadcrumb-bar', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-navigation-dropdown-breadcrumb-bar" :data-theme="interfaceTheme">
    <header class="cxd-navigation-dropdown-breadcrumb-bar__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-navigation-dropdown-breadcrumb-bar__body">
      <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
