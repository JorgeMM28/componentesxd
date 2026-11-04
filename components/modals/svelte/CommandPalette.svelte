<!--
  ============================================================================
  COMPONENTESXD — COMMAND PALETTE (SVELTE 5)
  Archivo: components/modals/svelte/CommandPalette.svelte
  ============================================================================
-->
<script lang="ts">
  import '../css-scss/modals.css';

  let { items = [] }: { items: Array<{ id: string; label: string; shortcut: string }> } = $props();
  let query = $state('');
  let activeIndex = $state(0);

  let filtered = $derived(
    items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
  );
</script>

<div class="cxd-cmd-palette">
  <div class="cxd-cmd-header">
    <input class="cxd-cmd-input" bind:value={query} placeholder="Ejecutar comando rápido..." />
    <kbd class="cxd-cmd-kbd">⌘K</kbd>
  </div>
  <div class="cxd-cmd-list">
    {#each filtered as item, idx (item.id)}
      <div
        class="cxd-cmd-item {idx === activeIndex ? 'is-active' : ''}"
        onmouseenter={() => (activeIndex = idx)}
      >
        <span>{item.label}</span>
        <kbd class="cxd-cmd-kbd">{item.shortcut}</kbd>
      </div>
    {/each}
  </div>
</div>

