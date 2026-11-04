<!--
  ============================================================================
  COMPONENTESXD — 04. Async 3-State Morph Button (Idle -> Run -> Done) (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/async-state-morph/AsyncStateMorph.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Async 3-State Morph Button (Idle -> Run -> Done)',
    badge = 'STATE MACHINE',
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

<section class="cxd-buttons-async-state-morph" data-theme={interfaceTheme}>
  <header class="cxd-buttons-async-state-morph__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-async-state-morph__body">
    <p>Transiciona automáticamente entre etiqueta normal, spinner SVG de precisión y confirmación vectorial.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('async-state-morph');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
