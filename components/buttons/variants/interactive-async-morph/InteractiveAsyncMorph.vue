<!-- Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito) — Vue 3 SFC (components/buttons/variants/interactive-async-morph/InteractiveAsyncMorph.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-buttons-interactive-async-morph" :data-active="active">
    <h3>Variante 04 — Botón Interactivo de 3 Estados (Reposo -> Cargando -> Éxito)</h3>
    <p>Haz clic para ver cómo bloquea la acción, muestra el spinner rotativo y cambia a estado completado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
