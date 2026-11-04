/**
 * ============================================================================
 * COMPONENTESXD — 06. Security Audit & Diff History Table (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/tables/variants/compact-audit-trail/compact-audit-trail.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-compact-audit-trail',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-tables-compact-audit-trail" [attr.data-theme]="interfaceTheme">
      <header class="cxd-tables-compact-audit-trail__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-tables-compact-audit-trail__body">
        <p>Registro inmutable de eventos de seguridad con dirección IP, hash criptográfico, actor y diff de cambios inline.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdCompactAuditTrailComponent {
  @Input() title = '06. Security Audit & Diff History Table';
  @Input() badge = 'SECURITY AUDIT';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('compact-audit-trail');
  }
}
