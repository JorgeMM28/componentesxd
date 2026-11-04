<!-- Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos — Svelte 5 Runes (components/special-hybrids/variants/cyber-radar-threat-sonar/CyberRadarThreatSonar.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-special-hybrids-cyber-radar-threat-sonar" data-active={active}>
  <h3>Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos</h3>
  <p>Barrido rotatorio continuo con coordenadas polares, detección de objetivos y lanzamiento de vectores de intercepción.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
