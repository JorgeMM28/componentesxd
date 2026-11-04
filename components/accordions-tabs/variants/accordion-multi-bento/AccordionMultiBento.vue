<!-- Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador — Vue 3 SFC (components/accordions-tabs/variants/accordion-multi-bento/AccordionMultiBento.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-accordion-multi-bento" :data-active="active">
    <h3>Variante 02 — Acordeón Multi-Apertura con Insignias de Estado y Buscador</h3>
    <p>Permite mantener varios módulos abiertos al mismo tiempo o expandir/colapsar todos con un solo clic.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
