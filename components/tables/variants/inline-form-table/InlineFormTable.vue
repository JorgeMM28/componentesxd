<!-- Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo) — Vue 3 SFC (components/tables/variants/inline-form-table/InlineFormTable.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-tables-inline-form-table" :data-active="active">
    <h3>Variante 07 — Tabla con Formulario Integrado (Inputs, Selects y Cálculo)</h3>
    <p>Celdas con inputs numéricos, selectores desplegables y switches que recalculan el subtotal de la tabla en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
