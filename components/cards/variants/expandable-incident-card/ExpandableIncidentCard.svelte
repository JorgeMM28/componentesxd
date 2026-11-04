<!--
  ============================================================================
  COMPONENTESXD — 06. Expandable Postmortem & Diagnostics Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/expandable-incident-card/ExpandableIncidentCard.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Expandable Postmortem & Diagnostics Card',
    badge = 'ACCORDION CARD',
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

<section class="cxd-cards-expandable-incident-card" data-theme={interfaceTheme}>
  <header class="cxd-cards-expandable-incident-card__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-expandable-incident-card__body">
    <p>Resumen compacto que despliega detalles técnicos de diagnóstico, nodos afectados y cronología.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('expandable-incident-card');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
