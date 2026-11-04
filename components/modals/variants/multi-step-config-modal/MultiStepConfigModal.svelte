<!--
  ============================================================================
  COMPONENTESXD — 04. Stepped Configuration Wizard Modal (SVELTE 5 RUNES)
  Archivo: components/modals/variants/multi-step-config-modal/MultiStepConfigModal.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Stepped Configuration Wizard Modal',
    badge = 'WIZARD MODAL',
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

<section class="cxd-modals-multi-step-config-modal" data-theme={interfaceTheme}>
  <header class="cxd-modals-multi-step-config-modal__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-modals-multi-step-config-modal__body">
    <p>Ventana modal dividida en pasos con indicador de progreso superior y pie de navegación persistente.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('multi-step-config-modal');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
