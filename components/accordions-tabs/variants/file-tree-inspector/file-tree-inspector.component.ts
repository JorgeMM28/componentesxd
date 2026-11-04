// Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo — Angular 18+ Signals (components/accordions-tabs/variants/file-tree-inspector/file-tree-inspector.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-file-tree-inspector',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-accordions-tabs-file-tree-inspector" [attr.data-active]="active()">
      <h3>Variante 06 — Árbol de Directorios Colapsable con Inspector de Archivo Activo</h3>
      <p>Estructura jerárquica de carpetas y archivos clicables que actualiza el visor de contenido derecho.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdFileTreeInspectorComponent {
  active = signal(false);
}
