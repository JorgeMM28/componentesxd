<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFileTreeInspector } from './file-tree-inspector.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFileTreeInspector(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="file-tree-inspector" ref="root"><div class="cxd-widget__columns"><div class="cxd-widget__list"><strong>src/</strong><div><button type="button" data-file="index.astro">index.astro</button></div><div><button type="button" data-file="tokens.css">tokens.css</button></div></div><div class="cxd-widget__list"><strong>Inspector</strong><p data-output>Selecciona un archivo</p></div></div></div></template>
