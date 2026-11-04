<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const items = [["documentation","Explorar Documentación Técnica","Abriendo especificación técnica v4.2..."],["download","Descargar Especificación Raw","Descargando manifiesto raw (42 KB)..."]];
const active = ref(-1);
</script>
<template><div class="cxd-text-links"><button v-for="([kind, label], index) in items" :key="kind" type="button" :class="['cxd-text-links__button', 'cxd-text-links__button--' + kind]" :aria-pressed="active === index" @click="active = index">{{ label }}</button><span class="cxd-text-links__status" role="status">{{ active < 0 ? 'Selecciona una opción' : 'RUTA ACTIVA: ' + items[active][2] }}</span></div></template>
