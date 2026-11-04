/**
 * ============================================================================
 * COMPONENTESXD — 07. Drag & Drop Artifact Dropzone (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/forms/variants/file-dropzone-inspector/file-dropzone-inspector.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-file-dropzone-inspector',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-forms-file-dropzone-inspector" [attr.data-theme]="interfaceTheme">
      <header class="cxd-forms-file-dropzone-inspector__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-forms-file-dropzone-inspector__body">
        <p>Zona de carga con borde punteado reactivo, validación de extensión/tamaño y vista previa del archivo.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdFileDropzoneInspectorComponent {
  @Input() title = '07. Drag & Drop Artifact Dropzone';
  @Input() badge = 'FILE UPLOAD';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('file-dropzone-inspector');
  }
}
