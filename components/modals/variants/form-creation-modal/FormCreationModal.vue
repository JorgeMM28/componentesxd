<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFormCreationModal } from './form-creation-modal.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFormCreationModal(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-dialog" data-cxd-control="form-creation-modal" ref="root"><button type="button" data-open>Crear instancia</button><span role="status">Listo</span><dialog aria-label="Crear instancia"><h3>Crear instancia</h3><form data-form><label>Nombre <input type="text" data-name required value="edge-analytics" /></label><label>Región <select data-region><option>us-east-1</option><option>eu-central-1</option><option>ap-northeast-1</option></select></label><div class="cxd-dialog__actions"><button type="submit">Crear</button><button type="button" data-close>Cancelar</button></div></form></dialog></div></template>
