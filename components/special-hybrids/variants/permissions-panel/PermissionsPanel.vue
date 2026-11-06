<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountPermissionsPanel } from './permissions-panel.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountPermissionsPanel(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-permissions" data-cxd-control="permissions-panel" ref="root"><header><small>ROL · EDITOR</small><h3>Permisos del equipo</h3></header><fieldset data-permissions><label><input type="checkbox" checked /> Editar proyectos</label><label><input type="checkbox" checked /> Publicar contenido</label><label><input type="checkbox" /> Gestionar equipo</label></fieldset><footer><strong data-count>2 permisos</strong><button type="button" data-save>Guardar cambios</button></footer><span role="status">Cambios sin guardar.</span></section></template>
