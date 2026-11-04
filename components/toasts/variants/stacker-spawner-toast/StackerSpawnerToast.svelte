<!-- Variante 05 — Generador Interactivo de Pila de Toasters — Svelte 5 Runes (components/toasts/variants/stacker-spawner-toast/StackerSpawnerToast.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-toasts-stacker-spawner-toast" data-active={active}>
  <h3>Variante 05 — Generador Interactivo de Pila de Toasters</h3>
  <p>Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
