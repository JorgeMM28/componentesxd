<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountAutoplayStoryBars } from './autoplay-story-bars.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountAutoplayStoryBars(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="autoplay-story-bars" ref="root"><div class="cxd-story-bars" aria-label="Historias"><button type="button" data-story="0" aria-label="Historia 1"><span></span></button><button type="button" data-story="1" aria-label="Historia 2"><span></span></button><button type="button" data-story="2" aria-label="Historia 3"><span></span></button></div><div class="cxd-carousel__item" data-content><strong>Historia 1</strong><p>Explora la colección.</p></div><div class="cxd-carousel__controls"><button type="button" data-play aria-pressed="false">Reproducir</button></div><span role="status"></span></div></template>
