<!-- Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable) — Svelte 5 Runes (components/special-hybrids/variants/form-otp-svg-vault/FormOtpSvgVault.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-form-otp-svg-vault" data-active={active}>
  <h3>Variante 10 — Bóveda PIN/OTP + Escudo Vectorial Autodibujable (svg.createDrawable)</h3>
  <p>Simula la validación criptográfica trazando el circuito SVG de seguridad y animando las casillas del código.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
