<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCyberRadarThreatSonar } from './cyber-radar-threat-sonar.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCyberRadarThreatSonar(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-special cxd-special--config" data-cxd-control="cyber-radar-threat-sonar" ref="root"><header><small>RADAR TÁCTICO</small><h3>Radar táctico</h3></header><p data-copy>Barrido reiniciado</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Contacto A</button><button type="button" data-item="1" aria-pressed="false">Contacto B</button><button type="button" data-item="2" aria-pressed="false">Contacto C</button></div><strong data-output>Contacto A</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Interceptar objetivo</button><button type="button" data-reset>Restaurar</button></div><span role="status">Barrido reiniciado</span></section></template>
