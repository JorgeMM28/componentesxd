<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMediaPlayer } from './media-player.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMediaPlayer(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--board" data-cxd-control="media-player" ref="root"><header><small>REPRODUCTOR MULTIMEDIA</small><h3>Reproductor multimedia</h3></header><p data-copy>Reproductor detenido</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Reproducir</button><button type="button" data-item="1" aria-pressed="false">Retroceder</button><button type="button" data-item="2" aria-pressed="false">Detener</button></div><strong data-output>Reproducir</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Reproducir muestra</button><button type="button" data-reset>Restaurar</button></div><span role="status">Reproductor detenido</span></section></template>
