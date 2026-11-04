<!-- Variante 04 — Toaster con Formulario de Respuesta Rápida — Vue 3 SFC (components/toasts/variants/form-reply-toast/FormReplyToast.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-form-reply-toast" :data-active="active">
    <h3>Variante 04 — Toaster con Formulario de Respuesta Rápida</h3>
    <p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
