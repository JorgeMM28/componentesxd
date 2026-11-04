<!-- Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor — Vue 3 SFC (components/navigation/variants/floating-action-dock/FloatingActionDock.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-navigation-floating-action-dock" :data-active="active">
    <h3>Variante 05 — Dock Flotante Inferior con Escalado al Pasar el Cursor</h3>
    <p>Barra de iconos de acceso rápido con insignias de estado e indicador de aplicación activa.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
