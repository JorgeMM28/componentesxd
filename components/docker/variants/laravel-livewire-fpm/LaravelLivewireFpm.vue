<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountLaravelLivewireFpm } from './laravel-livewire-fpm.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountLaravelLivewireFpm(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><section class="cxd-docker-flow" data-cxd-control="laravel-livewire-fpm" ref="root"><h3>Laravel + Livewire</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Nginx FastCGI</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">PHP-FPM con OPcache</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Worker Horizon y Redis</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section></template>
