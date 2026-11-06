<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFormOtpSvgVault } from './form-otp-svg-vault.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFormOtpSvgVault(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="form-otp-svg-vault" ref="root"><header><small>BÓVEDA OTP</small><h3>Bóveda OTP</h3></header><p data-copy>Esperando código</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Código 9248</button><button type="button" data-item="1" aria-pressed="false">Escudo</button><button type="button" data-item="2" aria-pressed="false">Acceso</button></div><strong data-output>Código 9248</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Validar código</button><button type="button" data-reset>Restaurar</button></div><span role="status">Esperando código</span></section></template>
