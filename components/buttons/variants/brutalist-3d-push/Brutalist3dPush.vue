<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountBrutalist3dPush } from './brutalist-3d-push.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined;
onMounted(() => { if (root.value) unmount = mountBrutalist3dPush(root.value); });
onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-mechanical" data-mechanical ref="root">
  <button type="button" class="cxd-mechanical__button" data-push>Presión física 3D (<span data-count>0</span>)</button>
  <button type="button" class="cxd-mechanical__button cxd-mechanical__button--secondary" data-toggle aria-pressed="true">Interruptor mecánico: <span data-state>ON</span></button>
</div></template>
