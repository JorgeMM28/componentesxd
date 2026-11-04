<!-- Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — Svelte 5 Runes (components/docker/variants/laravel-livewire-fpm/LaravelLivewireFpm.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-docker-laravel-livewire-fpm" data-active={active}>
  <h3>Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache</h3>
  <p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
