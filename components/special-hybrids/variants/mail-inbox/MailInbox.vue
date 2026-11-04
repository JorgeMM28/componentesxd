<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMailInbox } from './mail-inbox.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMailInbox(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="mail-inbox" ref="root"><h3>Bandeja de correo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Archivar mensaje</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Bandeja restaurada</span></div></template>
