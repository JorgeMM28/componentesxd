<!--
  ============================================================================
  COMPONENTESXD — 04. Fullstack Compose (App + Postgres 17 + Redis 7.4) (SVELTE 5 RUNES)
  Archivo: components/docker/variants/fullstack-postgres-redis/FullstackPostgresRedis.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '04. Fullstack Compose (App + Postgres 17 + Redis 7.4)',
    badge = 'DOCKER COMPOSE',
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

<section class="cxd-docker-fullstack-postgres-redis" data-theme={interfaceTheme}>
  <header class="cxd-docker-fullstack-postgres-redis__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-docker-fullstack-postgres-redis__body">
    <p>Orquestación completa con volúmenes persistentes, redes aisladas y healthchecks deterministas.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('fullstack-postgres-redis');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
