<!-- Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea) — Svelte 5 Runes (components/toasts/variants/styleless-minimal-alert/StylelessMinimalAlert.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-styleless-minimal-alert" data-active={active}>
  <h3>Variante 06 — Alerta Styleless Minimalista (Tipografía + Línea)</h3>
  <p>Sin caja ni sombras: solo una línea vertical de 2px, texto directo y enlace de acción limpio.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
