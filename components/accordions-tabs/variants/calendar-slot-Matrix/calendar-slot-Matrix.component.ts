// Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos — Angular 18+ Signals (components/accordions-tabs/variants/calendar-slot-Matrix/calendar-slot-Matrix.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-calendar-slot-Matrix',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-calendar-slot-Matrix" [attr.data-active]="active()">
      <h3>Variante 08 — Calendario y Selector Interactivo de Horarios / Turnos</h3>
      <p>Selecciona día de la semana y franja horaria con confirmación instantánea de reserva.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCalendarSlotMatrixComponent {
  active = signal(false);
}
