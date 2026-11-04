<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFormReplyToast } from './form-reply-toast.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFormReplyToast(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast" data-cxd-control="form-reply-toast" ref="root"><strong>Comentario de revisión</strong><p>¿Podemos subir el límite de rate-limiting?</p><form data-form><input data-input type="text" required aria-label="Respuesta rápida" placeholder="Escribe una respuesta" /><button type="submit">Responder</button></form><span role="status">Esperando respuesta</span></div></template>
