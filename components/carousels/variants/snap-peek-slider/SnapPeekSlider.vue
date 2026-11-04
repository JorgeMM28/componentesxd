<!-- Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso — Vue 3 SFC (components/carousels/variants/snap-peek-slider/SnapPeekSlider.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-snap-peek-slider" :data-active="active">
    <h3>Variante 03 — Carrusel Multi-Tarjeta con Vista Previa Lateral (Peek) y Barra de Progreso</h3>
    <p>Muestra múltiples tarjetas visibles simultáneamente con desplazamiento suave, indicador numérico 01/05 y barra de progreso sincronizada.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
