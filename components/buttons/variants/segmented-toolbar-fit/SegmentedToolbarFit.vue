<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const items = [["one","Vista Tabla","Vista de Tabla Estructurada (10 Variantes)"],["two","Vista Tarjetas","Vista de Tarjetas Bento (8 Variantes)"],["three","Vista Grafo 3D","Vista de Grafo Vectorial 3D"],["four","JSON Raw","Inspector JSON Raw en Vivo"]];
const active = ref(0);
</script>
<template><div class="cxd-segments"><button v-for="([kind, label], index) in items" :key="kind" type="button" :class="['cxd-segments__button', 'cxd-segments__button--' + kind]" :aria-pressed="active === index" @click="active = index">{{ label }}</button><span class="cxd-segments__status" role="status">{{ active < 0 ? 'MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)' : 'MODO ACTIVO: ' + items[active][2] }}</span></div></template>
