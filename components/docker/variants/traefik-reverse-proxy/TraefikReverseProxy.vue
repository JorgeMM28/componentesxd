<!--
  ============================================================================
  COMPONENTESXD — 06. Traefik v3 Automatic TLS + Reverse Proxy (VUE 3 COMPOSITION API)
  Archivo: components/docker/variants/traefik-reverse-proxy/TraefikReverseProxy.vue
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
    title: '06. Traefik v3 Automatic TLS + Reverse Proxy',
    badge: 'REVERSE PROXY'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'traefik-reverse-proxy', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-docker-traefik-reverse-proxy" :data-theme="interfaceTheme">
    <header class="cxd-docker-traefik-reverse-proxy__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-docker-traefik-reverse-proxy__body">
      <p>Configuración lista para enrutar múltiples contenedores locales con certificados y balanceo automático.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
