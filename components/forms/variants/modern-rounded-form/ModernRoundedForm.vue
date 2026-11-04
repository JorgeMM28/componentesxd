<!-- Variante 01 — Formulario Moderno con Bordes Redondeados — Vue 3 SFC (components/forms/variants/modern-rounded-form/ModernRoundedForm.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-forms-modern-rounded-form" :data-active="active">
    <h3>Variante 01 — Formulario Moderno con Bordes Redondeados</h3>
    <p>Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
