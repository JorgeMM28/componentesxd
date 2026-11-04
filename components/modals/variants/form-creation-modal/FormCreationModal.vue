<!-- Variante 04 — Modal con Formulario de Creación de Proyecto — Vue 3 SFC (components/modals/variants/form-creation-modal/FormCreationModal.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-modals-form-creation-modal" :data-active="active">
    <h3>Variante 04 — Modal con Formulario de Creación de Proyecto</h3>
    <p>Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
