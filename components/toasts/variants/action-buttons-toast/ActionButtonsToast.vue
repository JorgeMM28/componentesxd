<!-- Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer) — Vue 3 SFC (components/toasts/variants/action-buttons-toast/ActionButtonsToast.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-action-buttons-toast" :data-active="active">
    <h3>Variante 03 — Toaster con Acciones (Aceptar, Posponer, Deshacer)</h3>
    <p>Notificación de invitación/despliegue con botones interactivos que confirman o revierten la operación en vivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
