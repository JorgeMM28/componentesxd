<!-- Variante 04 — Modal con Formulario de Creación de Proyecto — Svelte 5 Runes (components/modals/variants/form-creation-modal/FormCreationModal.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-modals-form-creation-modal" data-active={active}>
  <h3>Variante 04 — Modal con Formulario de Creación de Proyecto</h3>
  <p>Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
