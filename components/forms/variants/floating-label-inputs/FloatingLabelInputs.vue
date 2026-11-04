<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingLabelInputs } from './floating-label-inputs.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingLabelInputs(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="floating-label-inputs" ref="root"><label class="cxd-form__float"><span>Nombre del cluster</span><input type="text" data-input value="us-east-production-01" /></label><span role="status">Etiqueta flotante</span></div></template>
