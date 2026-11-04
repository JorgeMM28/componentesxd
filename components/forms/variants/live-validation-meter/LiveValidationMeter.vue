<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountLiveValidationMeter } from './live-validation-meter.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountLiveValidationMeter(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="live-validation-meter" ref="root"><label>Contraseña <input type="password" data-password autocomplete="new-password" /></label><meter min="0" max="4" value="0" data-meter aria-label="Fortaleza de contraseña"></meter><span role="status">Sin evaluar</span></div></template>
