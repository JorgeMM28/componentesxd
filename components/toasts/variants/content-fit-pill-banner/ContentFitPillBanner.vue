<!-- Variante 07 — Banner Content-Fit Flotante Tipo Píldora — Vue 3 SFC (components/toasts/variants/content-fit-pill-banner/ContentFitPillBanner.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-content-fit-pill-banner" :data-active="active">
    <h3>Variante 07 — Banner Content-Fit Flotante Tipo Píldora</h3>
    <p>Ajustado exactamente al ancho del mensaje con insignia de novedad y botón de acción compacto.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
