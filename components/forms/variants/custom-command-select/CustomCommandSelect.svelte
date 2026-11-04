<!--
  ============================================================================
  COMPONENTESXD — 03. Searchable Multi-Option Dropdown Select (SVELTE 5 RUNES)
  Archivo: components/forms/variants/custom-command-select/CustomCommandSelect.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '03. Searchable Multi-Option Dropdown Select',
    badge = 'CUSTOM SELECT',
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

<section class="cxd-forms-custom-command-select" data-theme={interfaceTheme}>
  <header class="cxd-forms-custom-command-select__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-custom-command-select__body">
    <p>Lista desplegable organizada con categorías, prefijos técnicos y selección instantánea sin desorden visual.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('custom-command-select');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
