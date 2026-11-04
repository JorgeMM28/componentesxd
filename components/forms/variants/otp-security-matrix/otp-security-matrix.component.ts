/**
 * ============================================================================
 * COMPONENTESXD — 02. 6-Digit 2FA OTP Auto-Advance Matrix (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/otp-security-matrix/otp-security-matrix.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-otp-security-matrix',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-otp-security-matrix" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-otp-security-matrix__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-otp-security-matrix__body">
        <p>Cuadrícula de 6 dígitos con salto automático al escribir, soporte de pegado completo y retroceso inteligente.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdOtpSecurityMatrixComponent {
  @Input() title = '02. 6-Digit 2FA OTP Auto-Advance Matrix';
  @Input() badge = 'AUTH / 2FA';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('otp-security-matrix');
  }
}
