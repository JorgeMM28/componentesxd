// Variante 04 — Modal con Formulario de Creación de Proyecto — Angular 18+ Signals (components/modals/variants/form-creation-modal/form-creation-modal.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-form-creation-modal',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-modals-form-creation-modal" [attr.data-active]="active()">
      <h3>Variante 04 — Modal con Formulario de Creación de Proyecto</h3>
      <p>Diálogo completo con inputs de nombre, selector de región, visibilidad y envío interactivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFormCreationModalComponent {
  active = signal(false);
}
