// Variante 01 — Formulario Moderno con Bordes Redondeados — Angular 18+ Signals (components/forms/variants/modern-rounded-form/modern-rounded-form.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-modern-rounded-form',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-forms-modern-rounded-form" [attr.data-active]="active()">
      <h3>Variante 01 — Formulario Moderno con Bordes Redondeados</h3>
      <p>Campos con esquinas suaves de 12px, iconos SVG integrados a la izquierda y anillo de enfoque suave.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdModernRoundedFormComponent {
  active = signal(false);
}
