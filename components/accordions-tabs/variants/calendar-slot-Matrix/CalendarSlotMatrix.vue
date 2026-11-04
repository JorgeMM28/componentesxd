<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { mountCalendarSlotMatrix } from './calendar-slot-Matrix.js';
import './styles.css';
const root = ref<HTMLElement | null>(null); let unmount: (() => void) | undefined; onMounted(() => { if (root.value) unmount = mountCalendarSlotMatrix(root.value); }); onUnmounted(() => unmount?.());
</script>
<template><div class="cxd-widget" data-cxd-control="calendar-slot-Matrix" ref="root"><label>Día <select data-day><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select></label><div class="cxd-widget__row"><button type="button" data-slot="09:00" aria-pressed="false">09:00</button><button type="button" data-slot="11:00" aria-pressed="false">11:00</button><button type="button" data-slot="15:00" aria-pressed="false">15:00</button></div><span role="status">Selecciona un horario</span></div></template>
