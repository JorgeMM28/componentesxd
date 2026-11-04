<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAccordionExclusive } from './accordion-exclusive.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAccordionExclusive(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="accordion-exclusive" ref="root"><button type="button" data-open="one" aria-expanded="true">01 · Tokens</button><div class="cxd-widget__panel" data-panel="one">Colores y tipografía.</div><button type="button" data-open="two" aria-expanded="false">02 · Componentes</button><div class="cxd-widget__panel" data-panel="two" hidden>Bloques reutilizables.</div><button type="button" data-open="three" aria-expanded="false">03 · Animaciones</button><div class="cxd-widget__panel" data-panel="three" hidden>Movimiento e interacción.</div></div></template>
