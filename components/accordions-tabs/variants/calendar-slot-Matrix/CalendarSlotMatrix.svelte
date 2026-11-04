<script lang="ts">
import { mountCalendarSlotMatrix } from './calendar-slot-Matrix.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountCalendarSlotMatrix(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="calendar-slot-Matrix" use:control><label>Día <select data-day><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select></label><div class="cxd-widget__row"><button type="button" data-slot="09:00" aria-pressed="false">09:00</button><button type="button" data-slot="11:00" aria-pressed="false">11:00</button><button type="button" data-slot="15:00" aria-pressed="false">15:00</button></div><span role="status">Selecciona un horario</span></div>
