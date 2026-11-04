<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStylelessMinimalNav } from './styleless-minimal-nav.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStylelessMinimalNav(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav" ref="root"><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span></div></template>
