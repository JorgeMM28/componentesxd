// Variante 04 — Toaster con Formulario de Respuesta Rápida — Angular 18+ Signals (components/toasts/variants/form-reply-toast/form-reply-toast.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-form-reply-toast',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-form-reply-toast" [attr.data-active]="active()">
      <h3>Variante 04 — Toaster con Formulario de Respuesta Rápida</h3>
      <p>Incluye campo de texto e input de envío directo dentro de la notificación sin abrir otra página.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFormReplyToastComponent {
  active = signal(false);
}
