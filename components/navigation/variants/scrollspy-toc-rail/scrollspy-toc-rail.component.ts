/**
 * ============================================================================
 * COMPONENTESXD — 05. Technical Documentation Scrollspy Rail (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/scrollspy-toc-rail/scrollspy-toc-rail.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-scrollspy-toc-rail',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-scrollspy-toc-rail" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-scrollspy-toc-rail__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-scrollspy-toc-rail__body">
        <p>Índice lateral para documentación técnica que resalta la sección visible actual y muestra porcentaje leído.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdScrollspyTocRailComponent {
  @Input() title = '05. Technical Documentation Scrollspy Rail';
  @Input() badge = 'TOC RAIL';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('scrollspy-toc-rail');
  }
}
