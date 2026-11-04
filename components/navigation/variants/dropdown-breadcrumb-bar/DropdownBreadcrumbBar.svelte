<!--
  ============================================================================
  COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (SVELTE 5 RUNES)
  Archivo: components/navigation/variants/dropdown-breadcrumb-bar/DropdownBreadcrumbBar.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. Multi-Tenant Breadcrumb + Context Switcher',
    badge = 'BREADCRUMBS',
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

<section class="cxd-navigation-dropdown-breadcrumb-bar" data-theme={interfaceTheme}>
  <header class="cxd-navigation-dropdown-breadcrumb-bar__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-navigation-dropdown-breadcrumb-bar__body">
    <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('dropdown-breadcrumb-bar');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
