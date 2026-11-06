<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountQueryBuilder } from './query-builder.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountQueryBuilder(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-query" data-cxd-control="query-builder" ref="root"><header><small>CONSULTA VISUAL</small><h3>Filtros de clientes</h3></header><fieldset data-filters><label><input type="checkbox" value="estado = 'activo'" checked /> Activos</label><label><input type="checkbox" value="plan = 'pro'" /> Plan Pro</label><label><input type="checkbox" value="pais = 'MX'" /> México</label></fieldset><pre data-sql></pre><button type="button" data-copy>Preparar consulta</button><span role="status"></span></section></template>
