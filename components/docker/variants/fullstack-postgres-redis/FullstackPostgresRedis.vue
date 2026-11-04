<!--
  ============================================================================
  COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (VUE 3 COMPOSITION API)
  Archivo: components/docker/variants/fullstack-postgres-redis/FullstackPostgresRedis.vue
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
    title: '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)',
    badge: 'DOCKER COMPOSE'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'fullstack-postgres-redis', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-docker-fullstack-postgres-redis" :data-theme="interfaceTheme">
    <header class="cxd-docker-fullstack-postgres-redis__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-docker-fullstack-postgres-redis__body">
      <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
