<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountFilterSearchFacet } from './filter-search-facet.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountFilterSearchFacet(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-form" data-cxd-control="filter-search-facet" ref="root"><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span></div></template>
