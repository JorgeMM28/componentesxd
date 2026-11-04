<!--
  ============================================================================
  COMPONENTESXD — 04. Architectural Key-Value Description Grid (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/key-value-spec-list/KeyValueSpecList.vue
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
    title: '04. Architectural Key-Value Description Grid',
    badge: 'SPEC LIST'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'key-value-spec-list', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-key-value-spec-list" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-key-value-spec-list__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-key-value-spec-list__body">
      <p>Lista estructurada de propiedades técnicas con líneas guía punteadas y copiado rápido por valor.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
