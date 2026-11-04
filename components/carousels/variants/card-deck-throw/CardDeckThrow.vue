<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCardDeckThrow } from './card-deck-throw.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCardDeckThrow(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="card-deck-throw" ref="root"><div class="cxd-deck"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-dismiss>Descartar tarjeta</button><button type="button" data-reset>Restaurar mazo</button></div><span role="status"></span></div></template>
