<!-- Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada — Vue 3 SFC (components/special-hybrids/variants/kanban-spring-pipeline/KanbanSpringPipeline.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-kanban-spring-pipeline" :data-active="active">
    <h3>Variante 09 — Tablero Kanban con Física Spring + Barra de Progreso Global Animada</h3>
    <p>Promueve tarjetas entre etapas disparando rebote físico y actualizando el porcentaje global del sprint.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
