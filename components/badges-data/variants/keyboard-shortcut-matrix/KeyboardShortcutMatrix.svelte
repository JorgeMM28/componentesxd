<!--
  ============================================================================
  COMPONENTESXD — 07. Keyboard Shortcut Chord Display (SVELTE 5 RUNES)
  Archivo: components/badges-data/variants/keyboard-shortcut-matrix/KeyboardShortcutMatrix.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '07. Keyboard Shortcut Chord Display',
    badge = 'KBD CHORDS',
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

<section class="cxd-badges-data-keyboard-shortcut-matrix" data-theme={interfaceTheme}>
  <header class="cxd-badges-data-keyboard-shortcut-matrix__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-badges-data-keyboard-shortcut-matrix__body">
    <p>Representación visual de combinaciones de teclas (Ctrl + Shift + P) con relieve táctil.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('keyboard-shortcut-matrix');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
