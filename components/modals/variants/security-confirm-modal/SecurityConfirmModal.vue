<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountSecurityConfirmModal } from './security-confirm-modal.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountSecurityConfirmModal(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-dialog" data-cxd-control="security-confirm-modal" ref="root"><button type="button" data-open>Eliminar recurso</button><span role="status">Sin cambios</span><dialog aria-label="Confirmar eliminación"><h3>Confirmar eliminación</h3><p>Escribe ELIMINAR para habilitar la acción de demostración.</p><label>Confirmación <input type="text" data-confirm-input autocomplete="off" /></label><div class="cxd-dialog__actions"><button type="button" data-delete disabled>Eliminar</button><button type="button" data-close>Cancelar</button></div></dialog></div></template>
