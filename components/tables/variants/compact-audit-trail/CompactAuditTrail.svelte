<!--
  ============================================================================
  COMPONENTESXD — 06. Security Audit & Diff History Table (SVELTE 5 RUNES)
  Archivo: components/tables/variants/compact-audit-trail/CompactAuditTrail.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '06. Security Audit & Diff History Table',
    badge = 'SECURITY AUDIT',
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

<section class="cxd-tables-compact-audit-trail" data-theme={interfaceTheme}>
  <header class="cxd-tables-compact-audit-trail__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-tables-compact-audit-trail__body">
    <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('compact-audit-trail');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
