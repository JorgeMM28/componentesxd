<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCompactNavigationRail } from './compact-navigation-rail.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCompactNavigationRail(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail" ref="root"><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span></div></template>
