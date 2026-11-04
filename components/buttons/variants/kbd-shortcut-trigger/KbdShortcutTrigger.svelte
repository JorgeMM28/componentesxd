<!--
  ============================================================================
  COMPONENTESXD — 06. Tactical KBD Shortcut Command Button (SVELTE 5 RUNES)
  Archivo: components/buttons/variants/kbd-shortcut-trigger/KbdShortcutTrigger.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Tactical KBD Shortcut Command Button',
    badge = 'HOTKEY READY',
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

<section class="cxd-buttons-kbd-shortcut-trigger" data-theme={interfaceTheme}>
  <header class="cxd-buttons-kbd-shortcut-trigger__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-buttons-kbd-shortcut-trigger__body">
    <p>Incluye insignia física de atajo de teclado (Cmd+Enter) y responde tanto a clic como a evento keydown.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('kbd-shortcut-trigger');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
