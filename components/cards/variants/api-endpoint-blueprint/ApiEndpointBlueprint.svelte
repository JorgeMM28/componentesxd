<!--
  ============================================================================
  COMPONENTESXD — 03. REST / GraphQL Endpoint Spec Card (SVELTE 5 RUNES)
  Archivo: components/cards/variants/api-endpoint-blueprint/ApiEndpointBlueprint.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. REST / GraphQL Endpoint Spec Card',
    badge = 'API SPEC',
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

<section class="cxd-cards-api-endpoint-blueprint" data-theme={interfaceTheme}>
  <header class="cxd-cards-api-endpoint-blueprint__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-cards-api-endpoint-blueprint__body">
    <p>Muestra método HTTP, ruta parametrizada, latencia media y esquema de respuesta con botón de prueba.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('api-endpoint-blueprint');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
