<!--
  ============================================================================
  COMPONENTESXD — 04. Password Input + Live Entropy Analyzer (SVELTE 5 RUNES)
  Archivo: components/forms/variants/password-entropy-meter/PasswordEntropyMeter.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Password Input + Live Entropy Analyzer',
    badge = 'SECURITY METER',
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

<section class="cxd-forms-password-entropy-meter" data-theme={interfaceTheme}>
  <header class="cxd-forms-password-entropy-meter__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-password-entropy-meter__body">
    <p>Evalúa longitud, símbolos y entropía en tiempo real mediante 4 segmentos de estado y checklist SVG.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('password-entropy-meter');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
