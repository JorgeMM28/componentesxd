<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTableBulkExplosion } from './table-bulk-explosion.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTableBulkExplosion(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="table-bulk-explosion" ref="root"><h3>Selección masiva</h3><table><thead><tr><th>Seleccionar</th><th>Recurso</th><th>Estado</th></tr></thead><tbody data-rows></tbody></table><div class="cxd-special__actions"><button type="button" data-purge>Eliminar selección</button><button type="button" data-reset>Restaurar todo</button></div><span role="status"></span></div></template>
