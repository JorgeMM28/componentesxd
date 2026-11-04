<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStylelessUnderlineInputs } from './styleless-underline-inputs.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStylelessUnderlineInputs(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form cxd-form--bare" data-cxd-control="styleless-underline-inputs" ref="root"><label>Título del documento <input type="text" data-input value="Manifiesto de Diseño Industrial" /></label><span role="status">Edición en vivo</span></div></template>
