{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-agenda" data-cxd-control="agenda-reservations"><header><small>JUEVES 14 · ESTUDIO A</small><h3>Reservas disponibles</h3></header><div class="cxd-agenda__slots" data-slots><button type="button" data-slot="09:00">09:00</button><button type="button" data-slot="10:30">10:30</button><button type="button" data-slot="12:00">12:00</button><button type="button" data-slot="16:00">16:00</button></div><footer><strong data-selection>Sin reserva</strong><button type="button" data-book disabled>Confirmar reserva</button></footer><span role="status">Elige una franja disponible.</span></section>
<script type="module">
import { mountAgendaReservations } from '/assets/agenda-reservations.js';
document.querySelectorAll('[data-cxd-control="agenda-reservations"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAgendaReservations(root); });
</script>
