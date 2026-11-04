<!-- Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo) — Vue 3 SFC (components/accordions-tabs/variants/kanban-mini-board/KanbanMiniBoard.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-kanban-mini-board" :data-active="active">
    <h3>Variante 04 — Tablero Kanban Interactivo (Mover Tareas entre Columnas en Vivo)</h3>
    <p>Tarjetas operativas con botones para promover o regresar tareas entre Backlog, En Progreso y Producción.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
