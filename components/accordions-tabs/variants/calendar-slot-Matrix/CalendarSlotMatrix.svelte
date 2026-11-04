<!-- Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos — Svelte 5 Runes (components/accordions-tabs/variants/calendar-slot-Matrix/CalendarSlotMatrix.svelte) -->
<script lang="ts">
  import './styles.css';
  let active = $state(false);
</script>

<div class="cxd-accordions-tabs-calendar-slot-Matrix" data-active={active}>
  <h3>Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos</h3>
  <p>Selecciona día de la semana y franja horaria con confirmación instantánea de reserva.</p>
  <button type="button" onclick={() => (active = !active)}>Alternar</button>
</div>
