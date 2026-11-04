/**
 * ============================================================================
 * COMPONENTESXD — 03. Realtime Telemetry & Log Stream Table (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/realtime-log-stream/realtime-log-stream.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-realtime-log-stream',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-realtime-log-stream" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-realtime-log-stream__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-realtime-log-stream__body">
        <p>Matriz densa estilo consola de observabilidad con timestamps al milisegundo, nivel HTTP/Severidad, latencia p99 y filtro rápido.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdRealtimeLogStreamComponent {
  @Input() title = '03. Realtime Telemetry & Log Stream Table';
  @Input() badge = 'NOC / STREAMING';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('realtime-log-stream');
  }
}
