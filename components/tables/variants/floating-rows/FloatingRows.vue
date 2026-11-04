<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingRows } from './floating-rows.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingRows(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-table cxd-table--floating" data-cxd-control="floating-rows" ref="root"><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div></template>
