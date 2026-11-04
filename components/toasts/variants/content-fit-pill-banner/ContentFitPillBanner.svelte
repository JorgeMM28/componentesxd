<!-- Variante 07 — Banner Content-Fit Flotante Tipo Píldora — Svelte 5 Runes (components/toasts/variants/content-fit-pill-banner/ContentFitPillBanner.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-content-fit-pill-banner" data-active={active}>
  <h3>Variante 07 — Banner Content-Fit Flotante Tipo Píldora</h3>
  <p>Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
