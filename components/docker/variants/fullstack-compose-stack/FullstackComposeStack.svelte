<!-- Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — Svelte 5 Runes (components/docker/variants/fullstack-compose-stack/FullstackComposeStack.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-fullstack-compose-stack" data-active={active}>
  <h3>Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)</h3>
  <p>Orquestación completa con volúmenes persistentes y healthchecks automáticos.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
