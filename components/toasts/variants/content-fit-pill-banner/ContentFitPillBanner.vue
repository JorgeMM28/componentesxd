<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountContentFitPillBanner } from './content-fit-pill-banner.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountContentFitPillBanner(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-toast cxd-toast--pill" data-cxd-control="content-fit-pill-banner" ref="root"><strong>NUEVO</strong><span data-message>Motor Anime.js v4 integrado</span><button type="button" data-dismiss>Entendido</button><span role="status"></span></div></template>
