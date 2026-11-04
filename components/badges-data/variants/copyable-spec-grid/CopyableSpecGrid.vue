<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCopyableSpecGrid } from './copyable-spec-grid.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCopyableSpecGrid(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-data" data-cxd-control="copyable-spec-grid" ref="root"><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span></div></template>
