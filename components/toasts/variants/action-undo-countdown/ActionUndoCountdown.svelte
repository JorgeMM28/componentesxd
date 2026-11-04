<!--
  ============================================================================
  COMPONENTESXD — 03. Actionable Undo Toast + Progress Timer (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/action-undo-countdown/ActionUndoCountdown.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Actionable Undo Toast + Progress Timer',
    badge = 'UNDO / TIMER',
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

<section class="cxd-toasts-action-undo-countdown" data-theme={interfaceTheme}>
  <header class="cxd-toasts-action-undo-countdown__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-action-undo-countdown__body">
    <p>Toaster con botón de acción ("Deshacer borrado") y barra inferior de cuenta regresiva sincronizada.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('action-undo-countdown');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
