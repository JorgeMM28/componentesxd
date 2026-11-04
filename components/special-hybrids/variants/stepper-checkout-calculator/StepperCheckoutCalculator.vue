<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountStepperCheckoutCalculator } from './stepper-checkout-calculator.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountStepperCheckoutCalculator(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-special" data-cxd-control="stepper-checkout-calculator" ref="root"><h3>Configurador cloud</h3><div class="cxd-special__progress" role="progressbar" aria-label="Progreso" aria-valuemin="1" aria-valuemax="3" aria-valuenow="1"><span data-progress></span></div><div class="cxd-special__scene" data-scene><label>Hardware <select data-hardware><option value="20">Básico</option><option value="50">Avanzado</option><option value="90">Profesional</option></select></label><label>Red <select data-network><option value="10">Estándar</option><option value="25">Premium</option></select></label><label>Réplicas <input data-replicas type="number" min="1" max="10" value="1" /></label><strong data-total></strong></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span></div></template>
