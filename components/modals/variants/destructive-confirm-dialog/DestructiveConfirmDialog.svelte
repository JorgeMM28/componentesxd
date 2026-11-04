<!--
  ============================================================================
  COMPONENTESXD — 03. Critical Action Verification Modal (SVELTE 5 RUNES)
  Archivo: components/modals/variants/destructive-confirm-dialog/DestructiveConfirmDialog.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Critical Action Verification Modal',
    badge = 'SAFETY DIALOG',
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

<section class="cxd-modals-destructive-confirm-dialog" data-theme={interfaceTheme}>
  <header class="cxd-modals-destructive-confirm-dialog__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-destructive-confirm-dialog__body">
    <p>Diálogo de seguridad que solicita escribir el nombre del recurso antes de habilitar el botón de borrado.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('destructive-confirm-dialog');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
