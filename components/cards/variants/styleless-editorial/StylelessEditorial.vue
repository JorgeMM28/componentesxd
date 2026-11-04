<!-- Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout) — Vue 3 SFC (components/cards/variants/styleless-editorial/StylelessEditorial.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-styleless-editorial" :data-active="active">
    <h3>Variante 02 — Tarjeta Styleless Editorial (Sin Caja, Puro Layout)</h3>
    <p>Diseño tipográfico tipo revista suiza con numeración grande, separador de 1px y lectura limpia.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
