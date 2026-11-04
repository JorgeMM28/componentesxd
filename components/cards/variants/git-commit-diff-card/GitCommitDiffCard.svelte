<!--
  ============================================================================
  COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/git-commit-diff-card/GitCommitDiffCard.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Git Commit & Code Diff Inspection Card',
    badge = 'VERSION CONTROL',
    interfaceTheme = undefined,
    onAction
  }: {
    title?: string;
    badge?: string;
    interfaceTheme?: string;
    onAction?: (id: string) => void;
  } = $props();

  let count = $state(0);
</script>

<section class="cxd-cards-git-commit-diff-card" data-theme={interfaceTheme}>
  <header class="cxd-cards-git-commit-diff-card__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-git-commit-diff-card__body">
    <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('git-commit-diff-card');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
