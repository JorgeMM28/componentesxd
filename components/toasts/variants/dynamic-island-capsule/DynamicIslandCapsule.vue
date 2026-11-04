<!--
  ============================================================================
  COMPONENTESXD — 01. Dynamic Island Morphing Capsule (VUE 3 COMPOSITION API)
  Archivo: components/toasts/variants/dynamic-island-capsule/DynamicIslandCapsule.vue
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
    title: '01. Dynamic Island Morphing Capsule',
    badge: 'MORPHING CAPSULE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'dynamic-island-capsule', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-toasts-dynamic-island-capsule" :data-theme="interfaceTheme">
    <header class="cxd-toasts-dynamic-island-capsule__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-toasts-dynamic-island-capsule__body">
      <p>Cápsula superior que se expande suavemente entre estado reposo, procesamiento con onda de actividad y confirmación.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
