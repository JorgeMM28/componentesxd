<!--
  ============================================================================
  COMPONENTESXD — 03. React / Vue / Svelte / Angular SPA + Nginx (VUE 3 COMPOSITION API)
  Archivo: components/docker/variants/spa-nginx-brotli/SpaNginxBrotli.vue
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
    title: '03. React / Vue / Svelte / Angular SPA + Nginx',
    badge: 'NGINX ALPINE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'spa-nginx-brotli', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-docker-spa-nginx-brotli" :data-theme="interfaceTheme">
    <header class="cxd-docker-spa-nginx-brotli__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-docker-spa-nginx-brotli__body">
      <p>Compila estáticos en etapa builder y sirve con Nginx configurado con fallback SPA y cabeceras de caché.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
