<!-- Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha) — Vue 3 SFC (components/accordions-tabs/variants/transfer-dual-list/TransferDualList.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-transfer-dual-list" :data-active="active">
    <h3>Variante 07 — Lista Dual de Transferencia (Mover Permisos Izquierda ↔ Derecha)</h3>
    <p>Selecciona y transfiere módulos entre la columna de Disponibles y la columna de Activos en tiempo real.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
