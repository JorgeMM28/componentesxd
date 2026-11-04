<!-- Variante 02 — Navbar Flotante Redondeada Tipo Cápsula — Vue 3 SFC (components/navigation/variants/floating-pill-navbar/FloatingPillNavbar.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-floating-pill-navbar" :data-active="active">
    <h3>Variante 02 — Navbar Flotante Redondeada Tipo Cápsula</h3>
    <p>Barra superior centrada con bordes completamente redondeados, enlaces activos y botón CTA.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
