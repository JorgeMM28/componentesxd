<!--
  ============================================================================
  COMPONENTESXD — 05. Bun Distroless High-Performance Runtime (SVELTE 5 RUNES)
  Archivo: components/docker/variants/bun-ultra-fast-api/BunUltraFastApi.svelte
  ============================================================================
-->
<script lang="ts">
  import './styles.css';

  let {
    title = '05. Bun Distroless High-Performance Runtime',
    badge = 'BUN RUNTIME',
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

<section class="cxd-docker-bun-ultra-fast-api" data-theme={interfaceTheme}>
  <header class="cxd-docker-bun-ultra-fast-api__header">
    <span>{title}</span>
    <span class="cxd-badge">{badge}</span>
  </header>
  <div class="cxd-docker-bun-ultra-fast-api__body">
    <p>Contenedor basado en oven/bun:alpine para microservicios TypeScript de arranque instantáneo.</p>
    <button
      type="button"
      class="cxd-btn"
      onclick={() => {
        count += 1;
        onAction?.('bun-ultra-fast-api');
      }}
    >
      Interacciones: {count}
    </button>
  </div>
</section>
