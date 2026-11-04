<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractiveSvgGauges } from './interactive-svg-gauges.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractiveSvgGauges(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-data" data-cxd-control="interactive-svg-gauges" ref="root"><div class="cxd-data__gauge" data-gauge><strong data-value>84%</strong></div><label>Ajustar porcentaje <input type="range" min="0" max="100" value="84" data-slider /></label><button type="button" data-set="45">45%</button><button type="button" data-set="78">78%</button><button type="button" data-set="99">99%</button><span role="status">SLA global: 84%</span></div></template>
