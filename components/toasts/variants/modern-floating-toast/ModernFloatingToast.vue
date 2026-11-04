<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountModernFloatingToast } from './modern-floating-toast.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountModernFloatingToast(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast" data-cxd-control="modern-floating-toast" ref="root"><strong>Copia de seguridad completada con éxito</strong><p>14.2 GB sincronizados en el almacenamiento encriptado.</p><button type="button" data-replay>Reiniciar barra</button><progress data-progress max="100" value="100" aria-label="Tiempo restante"></progress><span role="status">Notificación activa</span></div></template>
