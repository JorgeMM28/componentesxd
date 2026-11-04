<!--
  ============================================================================
  COMPONENTESXD — 07. Multi-File Upload Progress Toaster (SVELTE 5 RUNES)
  Archivo: components/toasts/variants/floating-upload-Dock/FloatingUploadDock.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '07. Multi-File Upload Progress Toaster',
    badge = 'UPLOAD MANAGER',
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

<section class="cxd-toasts-floating-upload-Dock" data-theme={interfaceTheme}>
  <header class="cxd-toasts-floating-upload-Dock__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-toasts-floating-upload-Dock__body">
    <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('floating-upload-Dock');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
