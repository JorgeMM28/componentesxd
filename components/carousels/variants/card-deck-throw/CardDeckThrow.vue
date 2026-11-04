<!-- Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck) — Vue 3 SFC (components/carousels/variants/card-deck-throw/CardDeckThrow.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-carousels-card-deck-throw" :data-active="active">
    <h3>Variante 08 — Carrusel Mazo de Tarjetas con Descarte Elástico (Swipe / Throw Deck)</h3>
    <p>Pila interactiva donde cada acción lanza la tarjeta activa con rotación física y promueve la siguiente del mazo.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
