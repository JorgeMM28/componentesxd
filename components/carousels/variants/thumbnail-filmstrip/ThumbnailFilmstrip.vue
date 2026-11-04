<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountThumbnailFilmstrip } from './thumbnail-filmstrip.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountThumbnailFilmstrip(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-carousel" data-cxd-control="thumbnail-filmstrip" ref="root"><div class="cxd-carousel__item cxd-film-main" data-main>✦ Aurora</div><div class="cxd-filmstrip" aria-label="Seleccionar imagen"><button type="button" data-thumb="✦ Aurora" aria-pressed="true">✦ Aurora</button><button type="button" data-thumb="◉ Órbita" aria-pressed="false">◉ Órbita</button><button type="button" data-thumb="✳ Nébula" aria-pressed="false">✳ Nébula</button></div><span role="status">Imagen: Aurora</span></div></template>
