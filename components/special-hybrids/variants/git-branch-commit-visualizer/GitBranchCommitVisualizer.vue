<!-- Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG) — Vue 3 SFC (components/special-hybrids/variants/git-branch-commit-visualizer/GitBranchCommitVisualizer.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-git-branch-commit-visualizer" :data-active="active">
    <h3>Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG)</h3>
    <p>Diagrama vectorial de gran formato con 3 carriles de ramas, curvas Bezier autodibujables (svg.createDrawable), etiquetas de versión (v4.0 a v4.x), creación de commits, merges e inspector de SHA en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
