<!-- Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — Svelte 5 Runes (components/docker/variants/bun-microservice/BunMicroservice.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-bun-microservice" data-active={active}>
  <h3>Variante 05 — Microservicio Ultra-Rápido con Bun Alpine</h3>
  <p>Ejecución directa de TypeScript con arranque en milisegundos y consumo mínimo de RAM.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
