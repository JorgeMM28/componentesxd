<!-- Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro — Vue 3 SFC (components/special-hybrids/variants/carousel-spring-physics-deck/CarouselSpringPhysicsDeck.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-special-hybrids-carousel-spring-physics-deck" :data-active="active">
    <h3>Variante 05 — Carrusel Mazo 3D con Física de Resorte (createSpring) + Odómetro</h3>
    <p>Rota las tarjetas en el eje Z con física real de resorte mientras el contador financiero interpola el valor del nodo activo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
