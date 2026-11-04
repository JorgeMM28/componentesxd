<!--
  ============================================================================
  COMPONENTESXD — 05. Collaborator Avatar Stack + Presence Ring (VUE 3 COMPOSITION API)
  Archivo: components/badges-data/variants/avatar-presence-stack/AvatarPresenceStack.vue
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
    title: '05. Collaborator Avatar Stack + Presence Ring',
    badge: 'PRESENCE UI'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'avatar-presence-stack', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-badges-data-avatar-presence-stack" :data-theme="interfaceTheme">
    <header class="cxd-badges-data-avatar-presence-stack__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-badges-data-avatar-presence-stack__body">
      <p>Grupo superpuesto de colaboradores activos con contador de excedente (+8) y estado online.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
