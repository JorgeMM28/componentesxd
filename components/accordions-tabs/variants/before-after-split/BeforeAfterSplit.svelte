<!-- Variante 03 — Comparador Visual Before / After con Cortina Deslizable — Svelte 5 Runes (components/accordions-tabs/variants/before-after-split/BeforeAfterSplit.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-before-after-split" data-active={active}>
  <h3>Variante 03 — Comparador Visual Before / After con Cortina Deslizable</h3>
  <p>Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
