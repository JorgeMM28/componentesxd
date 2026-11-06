<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountGitBranchCommitVisualizer } from './git-branch-commit-visualizer.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountGitBranchCommitVisualizer(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="git-branch-commit-visualizer" ref="root"><header><small>GRAFO DE RAMAS</small><h3>Grafo de ramas</h3></header><p data-copy>Rama restaurada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">main</button><button type="button" data-item="1" aria-pressed="false">develop</button><button type="button" data-item="2" aria-pressed="false">feat/anime</button></div><strong data-output>main</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Crear commit</button><button type="button" data-reset>Restaurar</button></div><span role="status">Rama restaurada</span></section></template>
