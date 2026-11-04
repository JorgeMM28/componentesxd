<!-- Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo — Svelte 5 Runes (components/forms/variants/live-validation-meter/LiveValidationMeter.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-live-validation-meter" data-active={active}>
  <h3>Variante 06 — Formulario con Validación y Medidor de Seguridad en Vivo</h3>
  <p>Escribe una contraseña para ver cómo se calculan en tiempo real los 4 niveles de fortaleza.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
