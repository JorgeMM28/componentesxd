// Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos — Angular 18+ Signals (components/special-hybrids/variants/cyber-radar-threat-sonar/cyber-radar-threat-sonar.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-cyber-radar-threat-sonar',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-cyber-radar-threat-sonar" [attr.data-active]="active()">
      <h3>Variante 30 — Radar Sonar Táctico de 360° con Detección e Intercepción de Objetivos</h3>
      <p>Barrido rotatorio continuo con coordenadas polares, detección de objetivos y lanzamiento de vectores de intercepción.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdCyberRadarThreatSonarComponent {
  active = signal(false);
}
