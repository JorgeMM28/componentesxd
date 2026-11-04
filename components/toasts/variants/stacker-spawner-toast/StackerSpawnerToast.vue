<!-- Variante 05 — Generador Interactivo de Pila de Toasters — Vue 3 SFC (components/toasts/variants/stacker-spawner-toast/StackerSpawnerToast.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-toasts-stacker-spawner-toast" :data-active="active">
    <h3>Variante 05 — Generador Interactivo de Pila de Toasters</h3>
    <p>Haz clic en los botones para disparar toasters reales de Éxito, Alerta o Error que se apilan con Anime.js.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
