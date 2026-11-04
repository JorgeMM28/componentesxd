<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountHoldConfirmSafety } from './hold-confirm-safety.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountHoldConfirmSafety(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-control" data-cxd-control="hold-confirm-safety" ref="root"><button type="button" data-hold>Mantén presionado para purgar; con teclado pulsa dos veces</button><span role="status">PROGRESO DE SEGURIDAD: 0%</span></div></template>
