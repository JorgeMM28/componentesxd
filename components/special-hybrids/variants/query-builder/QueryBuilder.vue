<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountQueryBuilder } from './query-builder.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountQueryBuilder(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--stages" data-cxd-control="query-builder" ref="root"><header><small>CONSTRUCTOR DE CONSULTAS</small><h3>Constructor de consultas</h3></header><p data-copy>Consulta restaurada</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">estado = activo</button><button type="button" data-item="1" aria-pressed="false">región = MX</button><button type="button" data-item="2" aria-pressed="false">plan = pro</button></div><strong data-output>estado = activo</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Ejecutar consulta</button><button type="button" data-reset>Restaurar</button></div><span role="status">Consulta restaurada</span></section></template>
