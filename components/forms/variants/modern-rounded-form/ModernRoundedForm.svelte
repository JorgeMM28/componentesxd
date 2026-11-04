<!-- Variante 01 — Formulario Moderno con Bordes Redondeados — Svelte 5 Runes (components/forms/variants/modern-rounded-form/ModernRoundedForm.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-forms-modern-rounded-form" data-active={active}>
  <h3>Variante 01 — Formulario Moderno con Bordes Redondeados</h3>
  <p>Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
