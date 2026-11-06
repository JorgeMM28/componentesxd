<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountDownloadsCenter } from './downloads-center.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountDownloadsCenter(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--telemetry" data-cxd-control="downloads-center" ref="root"><header><small>CENTRO DE DESCARGAS</small><h3>Centro de descargas</h3></header><p data-copy>Descargas restauradas</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">kit-ui.zip</button><button type="button" data-item="1" aria-pressed="false">assets.mov</button><button type="button" data-item="2" aria-pressed="false">design.pdf</button></div><strong data-output>kit-ui.zip</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Iniciar descarga</button><button type="button" data-reset>Restaurar</button></div><span role="status">Descargas restauradas</span></section></template>
