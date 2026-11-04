<!--
  ============================================================================
  COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (VUE 3 COMPOSITION API)
  Archivo: components/cards/variants/git-commit-diff-card/GitCommitDiffCard.vue
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
    title: '04. Git Commit & Code Diff Inspection Card',
    badge: 'VERSION CONTROL'
  }
);

const emit = defineEmits<{
  (e: 'action', payload: { variant: string; timestamp: number }): void;
}>();

const status = ref<'idle' | 'active'>('idle');

function trigger() {
  status.value = status.value === 'idle' ? 'active' : 'idle';
  emit('action', { variant: 'git-commit-diff-card', timestamp: Date.now() });
}
</script>

<template>
  <section class="cxd-cards-git-commit-diff-card" :data-theme="interfaceTheme">
    <header class="cxd-cards-git-commit-diff-card__header">
      <span>{{ title }}</span>
      <span class="cxd-badge">{{ badge }}</span>
    </header>
    <div class="cxd-cards-git-commit-diff-card__body">
      <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
      <button type="button" class="cxd-btn" @click="trigger">
        Estado: {{ status }}
      </button>
    </div>
  </section>
</template>
