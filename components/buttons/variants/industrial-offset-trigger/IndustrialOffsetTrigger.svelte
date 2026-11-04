<!--
  ============================================================================
  COMPONENTESXD — 08. Mechanical Hard-Offset Push Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/industrial-offset-trigger/IndustrialOffsetTrigger.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '08. Mechanical Hard-Offset Push Button',
    badge = 'TACTILE PUSH',
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

<section class="cxd-buttons-industrial-offset-trigger" data-theme={interfaceTheme}>
  <header class="cxd-buttons-industrial-offset-trigger__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-industrial-offset-trigger__body">
    <p>Recorrido físico vertical al presionar con sombra sólida que colapsa en el estado :active.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('industrial-offset-trigger');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
