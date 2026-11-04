<!--
  ============================================================================
  COMPONENTESXD — 04. CLI & Webhook Telemetry Toast (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/terminal-cli-toast/TerminalCliToast.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. CLI & Webhook Telemetry Toast',
    badge = 'DEV / WEBHOOK',
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

<section class="cxd-toasts-terminal-cli-toast" data-theme={interfaceTheme}>
  <header class="cxd-toasts-terminal-cli-toast__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-terminal-cli-toast__body">
    <p>Notificación técnica con payload JSON resumido, código de estado HTTP y botón de copiado de trace ID.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('terminal-cli-toast');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
