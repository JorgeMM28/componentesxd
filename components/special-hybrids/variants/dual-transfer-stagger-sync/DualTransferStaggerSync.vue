<!-- Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada — Vue 3 SFC (components/special-hybrids/variants/dual-transfer-stagger-sync/DualTransferStaggerSync.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-dual-transfer-stagger-sync" :data-active="active">
    <h3>Variante 19 — Transferencia Dual de Módulos + Sincronización Masiva en Cascada</h3>
    <p>Mueve módulos uno por uno o transfiere todo el bloque con una animación escalonada de Anime.js.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
