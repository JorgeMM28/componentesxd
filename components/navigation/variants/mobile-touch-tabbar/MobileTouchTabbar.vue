<!-- Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas — Vue 3 SFC (components/navigation/variants/mobile-touch-tabbar/MobileTouchTabbar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <nav class="cxd-navigation-mobile-touch-tabbar" :data-active="active">
    <h3>Variante 10 — Mobile Bottom Tab Bar Táctil con Micro-Interacciones Cinéticas</h3>
    <p>Barra inferior flotante tipo iOS/Android con 5 destinos táctiles, pastilla indicadora animada con Anime.js v4 y badges de notificaciones.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </nav>
</template>
