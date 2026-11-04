<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSegmentedPricingToggle } from './segmented-pricing-toggle.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSegmentedPricingToggle(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="segmented-pricing-toggle" ref="root"><div class="cxd-widget__row"><button type="button" data-period="monthly" aria-pressed="true">Mensual</button><button type="button" data-period="yearly" aria-pressed="false">Anual · 20% menos</button></div><strong data-price>$20 / mes</strong><span role="status">Facturación mensual</span></div></template>
