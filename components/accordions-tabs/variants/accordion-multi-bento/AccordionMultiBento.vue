<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAccordionMultiBento } from './accordion-multi-bento.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAccordionMultiBento(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="accordion-multi-bento" ref="root"><div class="cxd-widget__row"><button type="button" data-all="open">Expandir todo</button><button type="button" data-all="close">Colapsar todo</button></div><button type="button" data-open="one" aria-expanded="true">Módulo de red</button><div class="cxd-widget__panel" data-panel="one">Latencia: 8 ms</div><button type="button" data-open="two" aria-expanded="false">Módulo de datos</button><div class="cxd-widget__panel" data-panel="two" hidden>Uso: 42 GB</div></div></template>
