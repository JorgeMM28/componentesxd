<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountInfiniteMarquee } from './infinite-marquee.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountInfiniteMarquee(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="infinite-marquee" ref="root"><div class="cxd-marquee"><div class="cxd-marquee-track" data-track><div class="cxd-marquee-group" data-group><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div><div class="cxd-marquee-group" aria-hidden="true"><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div></div></div><div class="cxd-carousel__controls"><button type="button" data-play aria-pressed="false">Reproducir</button><button type="button" data-direction>Invertir dirección</button><label>Velocidad <input type="range" data-speed min="10" max="120" value="40" /></label></div><span role="status">Pausado</span></div></template>
