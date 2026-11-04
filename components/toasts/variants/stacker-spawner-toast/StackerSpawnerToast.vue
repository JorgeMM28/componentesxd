<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStackerSpawnerToast } from './stacker-spawner-toast.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStackerSpawnerToast(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast" data-cxd-control="stacker-spawner-toast" ref="root"><strong>Notificaciones apiladas</strong><button type="button" data-kind="Éxito">+ Éxito</button><button type="button" data-kind="Alerta">+ Alerta</button><button type="button" data-kind="Error">+ Error</button><div class="cxd-toast__list" data-list aria-live="polite"></div></div></template>
