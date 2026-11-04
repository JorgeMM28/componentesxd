<!--
  ============================================================================
  COMPONENTESXD — 06. Security Audit & Diff History Table (VUE 3 COMPOSITION API)
  Archivo: components/tables/variants/compact-audit-trail/CompactAuditTrail.vue
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
    title: '06. Security Audit & Diff History Table',
    badge: 'SECURITY AUDIT'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'compact-audit-trail', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-tables-compact-audit-trail" :data-theme="interfaceTheme">
    <header class="cxd-tables-compact-audit-trail__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-tables-compact-audit-trail__body">
      <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
