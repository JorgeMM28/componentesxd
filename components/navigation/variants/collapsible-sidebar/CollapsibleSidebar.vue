<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCollapsibleSidebar } from './collapsible-sidebar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCollapsibleSidebar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--sidebar" data-cxd-control="collapsible-sidebar" ref="root"><button type="button" data-collapse aria-label="Colapsar navegación" aria-expanded="true">☰ <span data-label>Colapsar</span></button><label>Entorno <select data-env><option>Producción</option><option>Staging</option></select></label><button type="button" data-destination="Resumen" aria-label="Resumen" aria-pressed="true">◉ <span data-label>Resumen</span></button><button type="button" data-destination="Despliegues" aria-label="Despliegues" aria-pressed="false">▦ <span data-label>Despliegues</span></button><button type="button" data-destination="Seguridad" aria-label="Seguridad" aria-pressed="false">◇ <span data-label>Seguridad</span></button><span role="status">Vista activa: Resumen</span></div></template>
