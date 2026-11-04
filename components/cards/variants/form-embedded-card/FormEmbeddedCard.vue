<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFormEmbeddedCard } from './form-embedded-card.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFormEmbeddedCard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card" data-cxd-control="form-embedded-card" ref="root"><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" value="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p></div></template>
