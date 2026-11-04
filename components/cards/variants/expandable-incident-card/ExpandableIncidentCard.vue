<!--
  ============================================================================
  COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/expandable-incident-card/ExpandableIncidentCard.vue
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
    title: '06. Expandable Postmortem & Diagnostics Card',
    badge: 'ACCORDION CARD'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'expandable-incident-card', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-expandable-incident-card" :data-theme="interfaceTheme">
    <header class="cxd-cards-expandable-incident-card__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-expandable-incident-card__body">
      <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
