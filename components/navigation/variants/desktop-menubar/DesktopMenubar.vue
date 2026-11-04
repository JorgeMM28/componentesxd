<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDesktopMenubar } from './desktop-menubar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDesktopMenubar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav" data-cxd-control="desktop-menubar" ref="root"><button type="button" data-menu-trigger aria-expanded="false">Archivo</button><button type="button" data-menu-trigger aria-expanded="false">Edición</button><button type="button" data-menu-trigger aria-expanded="false">Git</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-command="Nuevo">Nuevo</button><button type="button" data-command="Guardar">Guardar</button><button type="button" data-command="Exportar">Exportar</button></div><span role="status">Selecciona un menú</span></div></template>
