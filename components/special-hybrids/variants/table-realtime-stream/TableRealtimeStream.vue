<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTableRealtimeStream } from './table-realtime-stream.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTableRealtimeStream(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="table-realtime-stream" ref="root"><h3>Registros en directo</h3><form data-form><label>Nombre <input name="name" required maxlength="40" /></label><label>Valor <input name="value" type="number" min="0" max="9999" required /></label><button type="submit">Agregar registro</button></form><table><thead><tr><th>Nombre</th><th>Valor</th><th>Acción</th></tr></thead><tbody data-rows></tbody></table><span role="status" data-total>0 registros · total 0</span></div></template>
