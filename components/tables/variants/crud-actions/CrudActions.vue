<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCrudActions } from './crud-actions.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCrudActions(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-table" data-cxd-control="crud-actions" ref="root"><button type="button" data-add>Agregar registro</button><table><thead><tr><th>Servicio</th><th>Estado</th><th>Acciones</th></tr></thead><tbody data-body><tr><td data-name>API</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr><tr><td data-name>Worker</td><td data-state>Activo</td><td><button type="button" data-toggle>Estado</button><button type="button" data-duplicate>Duplicar</button><button type="button" data-delete>Eliminar</button></td></tr></tbody></table><span role="status">2 registros</span></div></template>
