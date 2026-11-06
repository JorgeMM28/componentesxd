<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountMailInbox } from './mail-inbox.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountMailInbox(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-inbox" data-cxd-control="mail-inbox" ref="root"><header><small>BANDEJA · 3 NUEVOS</small><h3 data-subject>Propuesta de proyecto</h3></header><div data-mail-list><button type="button" data-mail="Propuesta de proyecto">Lucía · Propuesta</button><button type="button" data-mail="Informe semanal">Diego · Informe</button><button type="button" data-mail="Invitación a demo">Equipo · Invitación</button></div><div class="cxd-special__actions"><button type="button" data-archive>Archivar seleccionado</button><button type="button" data-restore>Restaurar bandeja</button></div><span role="status">Selecciona un mensaje.</span></section></template>
