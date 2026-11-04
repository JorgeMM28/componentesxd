<!--
  ============================================================================
  COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (VUE 3 COMPOSITION API)
  Archivo: components/forms/variants/file-dropzone-inspector/FileDropzoneInspector.vue
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
    title: '07. Drag & Drop Artifact Dropzone',
    badge: 'FILE UPLOAD'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'file-dropzone-inspector', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-forms-file-dropzone-inspector" :data-theme="interfaceTheme">
    <header class="cxd-forms-file-dropzone-inspector__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-forms-file-dropzone-inspector__body">
      <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
