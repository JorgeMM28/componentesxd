<!--
  ============================================================================
  COMPONENTESXD — 08. Teenage-Style Hardware Synth Module Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/hardware-module-card/HardwareModuleCard.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '08. Teenage-Style Hardware Synth Module Card',
    badge = 'INDUSTRIAL UI',
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

<section class="cxd-cards-hardware-module-card" data-theme={interfaceTheme}>
  <header class="cxd-cards-hardware-module-card__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-hardware-module-card__body">
    <p>Estética de módulo físico con tornillos vectoriales en las esquinas, indicadores LED y lecturas mono.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('hardware-module-card');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
