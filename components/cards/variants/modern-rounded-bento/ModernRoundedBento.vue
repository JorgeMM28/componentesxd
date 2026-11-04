<!-- Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial — Vue 3 SFC (components/cards/variants/modern-rounded-bento/ModernRoundedBento.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-cards-modern-rounded-bento" :data-active="active">
    <h3>Variante 01 — Tarjeta Moderna Bordes Redondeados + Luz Radial</h3>
    <p>Radio suave de 20px, iluminación que sigue al cursor, insignia superior y métrica destacada.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
