<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountContentFitInlineBar } from './content-fit-inline-bar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountContentFitInlineBar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form cxd-form--inline" data-cxd-control="content-fit-inline-bar" ref="root"><span>https://</span><input type="text" data-domain value="mi-proyecto.dev" aria-label="Dominio" /><button type="button" data-connect>Conectar dominio</button><span role="status">Listo</span></div></template>
