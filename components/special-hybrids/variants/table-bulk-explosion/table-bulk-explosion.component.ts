// Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada — Angular 18+ Signals (components/special-hybrids/variants/table-bulk-explosion/table-bulk-explosion.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-table-bulk-explosion',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-table-bulk-explosion" [attr.data-active]="active()">
      <h3>Variante 07 — Tabla Multi-Selección + Dock Flotante + Purga/Restauración Animada</h3>
      <p>Marca varias filas para desplegar la barra de acción y ejecuta purga en cascada o restauración completa con Anime.js.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdTableBulkExplosionComponent {
  active = signal(false);
}
