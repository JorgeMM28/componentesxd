<!--
  ============================================================================
  COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (VUE 3 COMPOSITION API)
  Archivo: components/docker/variants/bun-ultra-fast-api/BunUltraFastApi.vue
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
    title: '05. Bun Distroless High-Performance Runtime',
    badge: 'BUN RUNTIME'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'bun-ultra-fast-api', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-docker-bun-ultra-fast-api" :data-theme="interfaceTheme">
    <header class="cxd-docker-bun-ultra-fast-api__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-docker-bun-ultra-fast-api__body">
      <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
