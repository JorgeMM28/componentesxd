<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractiveAsyncMorph } from './interactive-async-morph.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractiveAsyncMorph(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-control" data-cxd-control="interactive-async-morph" ref="root"><button type="button" data-async aria-busy="false"><span data-spinner>◌ </span><span data-label>Haz clic para probar el ciclo asíncrono</span></button><button type="button" data-magnetic>Pasa el cursor · magnético</button><span role="status">LISTO</span></div></template>
