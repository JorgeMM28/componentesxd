<!-- Variante 07 — Tarjeta Content-Fit Compacta de Telemetría — Vue 3 SFC (components/cards/variants/content-fit-kpi-badge/ContentFitKpiBadge.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-content-fit-kpi-badge" :data-active="active">
    <h3>Variante 07 — Tarjeta Content-Fit Compacta de Telemetría</h3>
    <p>Ocupa únicamente el espacio exacto de su cifra, sparkline SVG y variación porcentual.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
