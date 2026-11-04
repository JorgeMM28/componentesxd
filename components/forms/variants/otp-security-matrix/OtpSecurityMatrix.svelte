<!--
  ============================================================================
  COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (SVELTE 5 RUNES)
  Archivo: components/forms/variants/otp-security-matrix/OtpSecurityMatrix.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '02. 6-Digit 2FA OTP Auto-Advance Matrix',
    badge = 'AUTH / 2FA',
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

<section class="cxd-forms-otp-security-matrix" data-theme={interfaceTheme}>
  <header class="cxd-forms-otp-security-matrix__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-forms-otp-security-matrix__body">
    <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('otp-security-matrix');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
