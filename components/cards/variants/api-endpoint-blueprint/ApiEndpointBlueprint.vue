<!--
  ============================================================================
  COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/api-endpoint-blueprint/ApiEndpointBlueprint.vue
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
    title: '03. REST / GraphQL Endpoint Spec Card',
    badge: 'API SPEC'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'api-endpoint-blueprint', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-api-endpoint-blueprint" :data-theme="interfaceTheme">
    <header class="cxd-cards-api-endpoint-blueprint__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-api-endpoint-blueprint__body">
      <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
