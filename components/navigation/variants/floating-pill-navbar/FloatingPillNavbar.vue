<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingPillNavbar } from './floating-pill-navbar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingPillNavbar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar" ref="root"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span></div></template>
