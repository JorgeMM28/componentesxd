<!-- Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG) — Svelte 5 Runes (components/special-hybrids/variants/git-branch-commit-visualizer/GitBranchCommitVisualizer.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-git-branch-commit-visualizer" data-active={active}>
  <h3>Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG)</h3>
  <p>Diagrama vectorial de gran formato con 3 carriles de ramas, curvas Bezier autodibujables (svg.createDrawable), etiquetas de versión (v4.0 a v4.x), creación de commits, merges e inspector de SHA en vivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
