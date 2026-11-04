<!-- Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada — Vue 3 SFC (components/special-hybrids/variants/skeleton-to-table-hydrator/SkeletonToTableHydrator.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-skeleton-to-table-hydrator" :data-active="active">
    <h3>Variante 12 — Tabla con Skeleton Cargando → Hidratación Real Escalonada</h3>
    <p>Conmuta entre el estado de carga (Skeleton Shimmer) y la tabla hidratada con entrada escalonada por fila.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
