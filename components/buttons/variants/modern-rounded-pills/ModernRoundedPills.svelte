<!-- Variante 01 — Botones Modernos Redondeados (Píldora & Glow) — Svelte 5 Runes (components/buttons/variants/modern-rounded-pills/ModernRoundedPills.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-buttons-modern-rounded-pills" data-active={active}>
  <h3>Variante 01 — Botones Modernos Redondeados (Píldora & Glow)</h3>
  <p>Bordes completamente redondeados (999px), degradado sutil, sombra difusa y micro-escala al hacer clic.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
