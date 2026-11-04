/**
 * ============================================================================
 * COMPONENTESXD — 07. Multi-File Upload Progress Toaster (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/toasts/variants/floating-upload-Dock/floating-upload-Dock.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-floating-upload-Dock',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-toasts-floating-upload-Dock" [attr.data-theme]="interfaceTheme">
      <header class="cxd-toasts-floating-upload-Dock__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-toasts-floating-upload-Dock__body">
        <p>Panel flotante compacto con barra de transferencia en tiempo real, velocidad MB/s y control de cancelación.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdFloatingUploadDockComponent {
  @Input() title = '07. Multi-File Upload Progress Toaster';
  @Input() badge = 'UPLOAD MANAGER';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('floating-upload-Dock');
  }
}
