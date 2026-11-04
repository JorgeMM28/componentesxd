<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSplitDropdownAction } from './split-dropdown-action.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSplitDropdownAction(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-control" data-cxd-control="split-dropdown-action" ref="root"><button type="button" data-run>Ejecutar: <span data-label>Producción Directa</span></button><select data-mode aria-label="Modo de ejecución"><option>Producción Directa</option><option>Simulación Dry-Run</option><option>Rollback Instantáneo</option></select><span role="status">LISTO PARA EJECUTAR ACCIÓN SELECCIONADA</span></div></template>
