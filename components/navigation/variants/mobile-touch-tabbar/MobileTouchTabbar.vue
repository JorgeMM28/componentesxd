<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMobileTouchTabbar } from './mobile-touch-tabbar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMobileTouchTabbar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--mobile" data-cxd-control="mobile-touch-tabbar" ref="root"><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Biblioteca" aria-pressed="false">Biblioteca</button><button type="button" data-destination="Motion" aria-pressed="false">Motion</button><button type="button" data-destination="Métricas" aria-pressed="false">Métricas</button><span role="status">Vista activa: Inicio</span></div></template>
