<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountModernRoundedBento } from './modern-rounded-bento.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountModernRoundedBento(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card" data-cxd-control="modern-rounded-bento" ref="root"><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p></div></template>
