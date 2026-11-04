<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountExpandableDrawerCard } from './expandable-drawer-card.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountExpandableDrawerCard(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-card" data-cxd-control="expandable-drawer-card" ref="root"><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p></div></template>
