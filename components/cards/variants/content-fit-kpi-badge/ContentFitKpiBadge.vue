<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountContentFitKpiBadge } from './content-fit-kpi-badge.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountContentFitKpiBadge(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge" ref="root"><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div></template>
