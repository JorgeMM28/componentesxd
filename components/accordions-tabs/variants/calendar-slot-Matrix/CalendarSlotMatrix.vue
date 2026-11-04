<!-- Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos — Vue 3 SFC (components/accordions-tabs/variants/calendar-slot-Matrix/CalendarSlotMatrix.vue) -->
<script setup lang="ts">
import { ref } from 'vue';
import './styles.css';
const active = ref(false);
</script>

<template>
  <div class="cxd-accordions-tabs-calendar-slot-Matrix" :data-active="active">
    <h3>Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos</h3>
    <p>Selecciona día de la semana y franja horaria con confirmación instantánea de reserva.</p>
    <button type="button" @click="active = !active">Alternar</button>
  </div>
</template>
