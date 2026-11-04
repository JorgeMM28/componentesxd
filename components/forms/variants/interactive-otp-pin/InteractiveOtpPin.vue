<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInteractiveOtpPin } from './interactive-otp-pin.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInteractiveOtpPin(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="interactive-otp-pin" ref="root"><div class="cxd-form__otp"><input inputmode="numeric" maxlength="1" aria-label="Dígito 1" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 2" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 3" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 4" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 5" /><input inputmode="numeric" maxlength="1" aria-label="Dígito 6" /></div><button type="button" data-generate>Generar código</button><span role="status">Introduce 6 dígitos</span></div></template>
