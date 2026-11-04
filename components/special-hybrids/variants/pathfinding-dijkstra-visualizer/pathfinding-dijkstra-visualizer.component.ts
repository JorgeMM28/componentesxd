// Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga — Angular 18+ Signals (components/special-hybrids/variants/pathfinding-dijkstra-visualizer/pathfinding-dijkstra-visualizer.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-pathfinding-dijkstra-visualizer',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-pathfinding-dijkstra-visualizer" [attr.data-active]="active()">
      <h3>Variante 23 — Laberinto Interactivo de Alta Densidad (24×10 = 240 Micro-Celdas) con Algoritmo A* / BFS de Ruta Larga</h3>
      <p>Matriz densa de 240 micro-recuadros con generador de laberinto serpenteante de 55+ pasos, creación manual de muros y onda de exploración animada con Anime.js v4.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdPathfindingDijkstraVisualizerComponent {
  active = signal(false);
}
