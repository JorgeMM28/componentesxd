<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountBeforeAfterSplit } from './before-after-split.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountBeforeAfterSplit(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="before-after-split" ref="root"><div class="cxd-widget__compare" data-compare>DESPUÉS<span>ANTES</span></div><label>Divisor <input type="range" min="0" max="100" value="50" data-range /></label><span role="status">50%</span></div></template>
