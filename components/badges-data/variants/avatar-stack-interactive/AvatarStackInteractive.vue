<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAvatarStackInteractive } from './avatar-stack-interactive.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAvatarStackInteractive(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-data" data-cxd-control="avatar-stack-interactive" ref="root"><button type="button" class="cxd-data__avatar" data-name="Elena Rostova" data-role="Arquitectura UI" aria-pressed="true">ER</button><button type="button" class="cxd-data__avatar" data-name="Marco Kovacs" data-role="Ingeniería de sistemas" aria-pressed="false">MK</button><button type="button" class="cxd-data__avatar" data-name="Sofía Vance" data-role="Diseño de movimiento" aria-pressed="false">SV</button><span role="status">Elena Rostova · Arquitectura UI</span></div></template>
