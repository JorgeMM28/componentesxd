<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountExpandableDetail } from './expandable-detail.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountExpandableDetail(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-table" data-cxd-control="expandable-detail" ref="root"><table><thead><tr><th>Incidente</th><th>Estado</th></tr></thead><tbody><tr><td><button type="button" data-expand="one" aria-expanded="false">INC-4091 · Latencia</button></td><td>SEV-2</td></tr><tr data-detail="one" hidden><td>Tráfico normalizado al 100%.</td><td>Resuelto</td></tr><tr><td><button type="button" data-expand="two" aria-expanded="false">DEP-8820 · Actualización</button></td><td>Completado</td></tr><tr data-detail="two" hidden><td>24 nodos reiniciados.</td><td>Sin pérdida</td></tr></tbody></table></div></template>
