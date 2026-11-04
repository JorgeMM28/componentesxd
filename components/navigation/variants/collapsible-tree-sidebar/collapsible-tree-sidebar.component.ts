/**
 * ============================================================================
 * COMPONENTESXD — 01. Architectural Tree Sidebar Navigation (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/collapsible-tree-sidebar/collapsible-tree-sidebar.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-collapsible-tree-sidebar',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-collapsible-tree-sidebar" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-collapsible-tree-sidebar__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-collapsible-tree-sidebar__body">
        <p>Navegación vertical con secciones colapsables, contadores numéricos tabulares e indicador activo.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdCollapsibleTreeSidebarComponent {
  @Input() title = '01. Architectural Tree Sidebar Navigation';
  @Input() badge = 'APP SIDEBAR';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('collapsible-tree-sidebar');
  }
}
