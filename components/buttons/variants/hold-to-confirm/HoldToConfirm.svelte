<!--
  ============================================================================
  COMPONENTESXD — 03. Destructive Hold-to-Confirm Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/hold-to-confirm/HoldToConfirm.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Destructive Hold-to-Confirm Button',
    badge = 'SAFETY LOCK',
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

<section class="cxd-buttons-hold-to-confirm" data-theme={interfaceTheme}>
  <header class="cxd-buttons-hold-to-confirm__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-hold-to-confirm__body">
    <p>Previene clics accidentales en acciones críticas exigiendo mantener presionado 1.2s mientras se llena la barra.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('hold-to-confirm');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
