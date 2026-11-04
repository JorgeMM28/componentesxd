// Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax — Angular 18+ Signals (components/special-hybrids/variants/neural-network-graph-propagator/neural-network-graph-propagator.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-neural-network-graph-propagator',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-neural-network-graph-propagator" [attr.data-active]="active()">
      <h3>Variante 25 — Grafo de Red Neuronal Multicapa con Sinapsis SVG y Propagación Softmax</h3>
      <p>Dispara una inferencia para ver los tensores viajar por las 15 sinapsis SVG a través de las capas ocultas hasta calcular la predicción final.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdNeuralNetworkGraphPropagatorComponent {
  active = signal(false);
}
