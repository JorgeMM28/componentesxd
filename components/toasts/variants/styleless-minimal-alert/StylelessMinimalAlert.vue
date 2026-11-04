<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStylelessMinimalAlert } from './styleless-minimal-alert.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStylelessMinimalAlert(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast cxd-toast--minimal" data-cxd-control="styleless-minimal-alert" ref="root" role="status"><strong>AVISO DEL SISTEMA</strong><p>La ventana de mantenimiento iniciará en 15 minutos sin interrupción de tráfico.</p></div></template>
