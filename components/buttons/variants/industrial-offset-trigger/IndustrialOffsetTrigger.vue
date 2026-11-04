<!--
  ============================================================================
  COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/industrial-offset-trigger/IndustrialOffsetTrigger.vue
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
    title: '08. Mechanical Hard-Offset Push Button',
    badge: 'TACTILE PUSH'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'industrial-offset-trigger', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-industrial-offset-trigger" :data-theme="interfaceTheme">
    <header class="cxd-buttons-industrial-offset-trigger__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-industrial-offset-trigger__body">
      <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
