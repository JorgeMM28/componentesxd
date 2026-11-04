<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountTactileSwitchesSliders } from './tactile-switches-sliders.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountTactileSwitchesSliders(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="tactile-switches-sliders" ref="root"><label><input type="checkbox" checked /> Auto-deploy en push</label><label><input type="checkbox" /> Modo estricto WAF</label><button type="button" data-step="-1" aria-label="Reducir réplicas">−</button><span data-value>4</span><button type="button" data-step="1" aria-label="Aumentar réplicas">+</button><span role="status">4 réplicas</span></div></template>
