<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountModernGlassModal } from './modern-glass-modal.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountModernGlassModal(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-dialog" data-cxd-control="modern-glass-modal" ref="root"><button type="button" data-open>Abrir diálogo</button><span role="status">Listo</span><dialog aria-label="Actualizar interfaz"><h3>Actualizar interfaz</h3><p>Aplica la configuración seleccionada a la demostración.</p><div class="cxd-dialog__actions"><button type="button" data-confirm>Confirmar</button><button type="button" data-close>Cancelar</button></div></dialog></div></template>
