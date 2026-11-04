<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountModernPulseBadges } from './modern-pulse-badges.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountModernPulseBadges(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-data" data-cxd-control="modern-pulse-badges" ref="root"><span class="cxd-data__tag">OPERATIONAL</span><span class="cxd-data__tag">DEGRADED</span><span class="cxd-data__tag">OUTAGE</span><button type="button" data-tag>astro-5 ×</button><button type="button" data-tag>animejs-v4 ×</button><button type="button" data-tag>typescript ×</button><button type="button" data-restore>Restaurar etiquetas</button><span role="status">3 etiquetas activas</span></div></template>
