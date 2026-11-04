<!-- Variante 05 — Modal de Confirmación con Validación de Texto — Vue 3 SFC (components/modals/variants/security-confirm-modal/SecurityConfirmModal.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-security-confirm-modal" :data-active="active">
    <h3>Variante 05 — Modal de Confirmación con Validación de Texto</h3>
    <p>Escribe "ELIMINAR" en el campo de confirmación para desbloquear el botón destructivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
