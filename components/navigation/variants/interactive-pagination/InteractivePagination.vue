<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractivePagination } from './interactive-pagination.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractivePagination(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav" data-cxd-control="interactive-pagination" ref="root"><button type="button" data-step="-1">Anterior</button><button type="button" data-page="1" aria-current="page">1</button><button type="button" data-page="2">2</button><button type="button" data-page="3">3</button><button type="button" data-step="1">Siguiente</button><span role="status">Página 1 de 3</span></div></template>
