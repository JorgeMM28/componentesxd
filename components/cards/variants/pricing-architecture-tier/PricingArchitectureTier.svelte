<!--
  ============================================================================
  COMPONENTESXD — 05. Architectural Pricing & Quota Tier Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/pricing-architecture-tier/PricingArchitectureTier.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Architectural Pricing & Quota Tier Card',
    badge = 'BILLING TIER',
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

<section class="cxd-cards-pricing-architecture-tier" data-theme={interfaceTheme}>
  <header class="cxd-cards-pricing-architecture-tier__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-pricing-architecture-tier__body">
    <p>Desglose técnico de plan con medidor de cuota consumida, lista verificada con SVGs y CTA integrado.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('pricing-architecture-tier');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
