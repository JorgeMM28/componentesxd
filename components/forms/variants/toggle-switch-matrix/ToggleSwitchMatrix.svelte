<!--
  ============================================================================
  COMPONENTESXD — 08. Industrial Toggle Switch & Radio Cards (SVELTE 5 RUNES)
  Archivo: components/forms/variants/toggle-switch-matrix/ToggleSwitchMatrix.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '08. Industrial Toggle Switch & Radio Cards',
    badge = 'SWITCHES',
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

<section class="cxd-forms-toggle-switch-matrix" data-theme={interfaceTheme}>
  <header class="cxd-forms-toggle-switch-matrix__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-toggle-switch-matrix__body">
    <p>Interruptores binarios de baja latencia y tarjetas de selección exclusiva con indicador activo.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('toggle-switch-matrix');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
