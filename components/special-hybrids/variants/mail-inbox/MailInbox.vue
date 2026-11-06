<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMailInbox } from './mail-inbox.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMailInbox(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--telemetry" data-cxd-control="mail-inbox" ref="root"><header><small>BANDEJA DE CORREO</small><h3>Bandeja de correo</h3></header><p data-copy>Bandeja restaurada</p><div class="cxd-special__scene" data-scene data-shape="telemetry"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Propuesta</button><button type="button" data-item="1" aria-pressed="false">Informe</button><button type="button" data-item="2" aria-pressed="false">Invitación</button></div><strong data-output>Propuesta</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Archivar mensaje</button><button type="button" data-reset>Restaurar</button></div><span role="status">Bandeja restaurada</span></section></template>
