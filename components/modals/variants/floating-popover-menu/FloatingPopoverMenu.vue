<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFloatingPopoverMenu } from './floating-popover-menu.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFloatingPopoverMenu(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-dialog" data-cxd-control="floating-popover-menu" ref="root"><button type="button" data-trigger aria-expanded="false">Abrir menú contextual</button><div class="cxd-dialog__popover" data-popover hidden><div class="cxd-dialog__list"><button type="button" data-action="Editar">Editar</button><button type="button" data-action="Duplicar">Duplicar</button><button type="button" data-action="Archivar">Archivar</button></div></div><span role="status">Ninguna acción</span></div></template>
