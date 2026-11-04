<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const items = [["primary","Botón Píldora Moderno","Despliegue Iniciado"],["soft","Secundario Suave","Modo Previsualización Activo"],["outline","Contorno Redondeado","Sincronizado con Éxito"]];
const active = ref(-1);
</script>
<template><div class="cxd-pills"><button v-for="([kind, label], index) in items" :key="kind" type="button" :class="['cxd-pills__button', 'cxd-pills__button--' + kind]" :aria-pressed="active === index" @click="active = index">{{ label }}</button><span class="cxd-pills__status" role="status">{{ active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' + items[active][2] }}</span></div></template>
