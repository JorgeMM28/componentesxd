<!-- Variante 03 — Comparador Visual Before / After con Cortina Deslizable — Vue 3 SFC (components/accordions-tabs/variants/before-after-split/BeforeAfterSplit.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-before-after-split" :data-active="active">
    <h3>Variante 03 — Comparador Visual Before / After con Cortina Deslizable</h3>
    <p>Arrastra el control divisor horizontal para comparar en tiempo real dos estados o arquitecturas superpuestas.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
