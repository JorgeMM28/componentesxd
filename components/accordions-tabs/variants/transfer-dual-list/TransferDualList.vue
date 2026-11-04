<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTransferDualList } from './transfer-dual-list.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTransferDualList(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="transfer-dual-list" ref="root"><div class="cxd-widget__columns"><div class="cxd-widget__list" data-available><strong>Disponibles</strong><div data-item><span>WAF</span> <button type="button" data-transfer>Activar →</button></div><div data-item><span>Caché</span> <button type="button" data-transfer>Activar →</button></div></div><div class="cxd-widget__list" data-active><strong>Activos</strong></div></div><span role="status">Selecciona un módulo</span></div></template>
