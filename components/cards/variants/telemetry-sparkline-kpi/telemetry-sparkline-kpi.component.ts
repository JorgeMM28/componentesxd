/**
 * ============================================================================
 * COMPONENTESXD — 02. Telemetry KPI + SVG Sparkline Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/telemetry-sparkline-kpi/telemetry-sparkline-kpi.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-telemetry-sparkline-kpi',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-telemetry-sparkline-kpi" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-telemetry-sparkline-kpi__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-telemetry-sparkline-kpi__body">
        <p>Tarjeta de métrica operativa con curva SVG embebida, variación porcentual y estado de umbral.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdTelemetrySparklineKpiComponent {
  @Input() title = '02. Telemetry KPI + SVG Sparkline Card';
  @Input() badge = 'LIVE METRIC';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('telemetry-sparkline-kpi');
  }
}
