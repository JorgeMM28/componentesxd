<!--
  ============================================================================
  COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (VUE 3 COMPOSITION API)
  Archivo: components/buttons/variants/kbd-shortcut-trigger/KbdShortcutTrigger.vue
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
    title: '06. Tactical KBD Shortcut Command Button',
    badge: 'HOTKEY READY'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'kbd-shortcut-trigger', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-buttons-kbd-shortcut-trigger" :data-theme="interfaceTheme">
    <header class="cxd-buttons-kbd-shortcut-trigger__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-buttons-kbd-shortcut-trigger__body">
      <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
