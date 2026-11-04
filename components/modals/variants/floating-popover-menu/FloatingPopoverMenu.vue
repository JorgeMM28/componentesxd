<!-- Variante 03 — Menú Popover Flotante Content-Fit con Acciones — Vue 3 SFC (components/modals/variants/floating-popover-menu/FloatingPopoverMenu.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-floating-popover-menu" :data-active="active">
    <h3>Variante 03 — Menú Popover Flotante Content-Fit con Acciones</h3>
    <p>Menú contextual compacto con opciones rápidas, atajos de teclado e interruptor integrado.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
