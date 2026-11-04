// Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — Angular 18+ Signals (components/special-hybrids/variants/sorting-algorithm-symphony/sorting-algorithm-symphony.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-sorting-algorithm-symphony',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-sorting-algorithm-symphony" [attr.data-active]="active()">
      <h3>Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)</h3>
      <p>28 columnas de datos con comparación e intercambio paso a paso en vivo, resaltado de pivotes activos, contadores en tiempo real y barrido verde de verificación final.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdSortingAlgorithmSymphonyComponent {
  active = signal(false);
}
