<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingActionDock } from './floating-action-dock.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingActionDock(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-action-dock" ref="root"><button type="button" data-destination="Consola" aria-pressed="true">⌘ Consola</button><button type="button" data-destination="Archivos" aria-pressed="false">▦ Archivos</button><button type="button" data-destination="Métricas" aria-pressed="false">◉ Métricas</button><span role="status">Vista activa: Consola</span></div></template>
