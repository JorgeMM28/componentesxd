// Variante 08 — Toaster Interactivo de Subida de Archivos — Angular 18+ Signals (components/toasts/variants/upload-progress-toaster/upload-progress-toaster.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-upload-progress-toaster',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-toasts-upload-progress-toaster" [attr.data-active]="active()">
      <h3>Variante 08 — Toaster Interactivo de Subida de Archivos</h3>
      <p>Simula la subida de múltiples archivos con porcentaje animado en tiempo real y botón de pausa/reinicio.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdUploadProgressToasterComponent {
  active = signal(false);
}
