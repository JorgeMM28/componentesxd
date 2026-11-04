<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractiveBreadcrumbs } from './interactive-breadcrumbs.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractiveBreadcrumbs(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav" data-cxd-control="interactive-breadcrumbs" ref="root"><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span></div></template>
