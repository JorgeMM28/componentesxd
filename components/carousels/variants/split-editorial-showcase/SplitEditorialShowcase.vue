<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSplitEditorialShowcase } from './split-editorial-showcase.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSplitEditorialShowcase(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="split-editorial-showcase" ref="root"><div class="cxd-split"><div data-art aria-hidden="true">✦</div><div><small>COLECCIÓN EDITORIAL</small><h3 data-title>Aurora</h3><p data-description>Luz y color para una interfaz expresiva.</p></div></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div></template>
