<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMultiFilterTable } from './multi-filter-table.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMultiFilterTable(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-table" data-cxd-control="multi-filter-table" ref="root"><div class="cxd-table__toolbar"><label>Buscar <input type="search" data-search /></label><label>Departamento <select data-department><option value="">Todos</option><option>Arquitectura</option><option>Sistemas</option></select></label><label>Estado <select data-status><option value="">Todos</option><option>Online</option><option>Revisión</option></select></label></div><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr data-row data-department-value="Arquitectura" data-status-value="Online"><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr data-row data-department-value="Sistemas" data-status-value="Revisión"><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr></tbody></table><span role="status">2 resultados</span></div></template>
