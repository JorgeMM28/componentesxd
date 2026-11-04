/**
 * ============================================================================
 * COMPONENTESXD — 02. Multi-Tenant Breadcrumb + Context Switcher (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/navigation/variants/dropdown-breadcrumb-bar/dropdown-breadcrumb-bar.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-dropdown-breadcrumb-bar',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-navigation-dropdown-breadcrumb-bar" [attr.data-theme]="interfaceTheme">
      <header class="cxd-navigation-dropdown-breadcrumb-bar__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-navigation-dropdown-breadcrumb-bar__body">
        <p>Ruta de navegación estilo Vercel/GitHub con listas desplegables para cambiar organización, proyecto o rama.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdDropdownBreadcrumbBarComponent {
  @Input() title = '02. Multi-Tenant Breadcrumb + Context Switcher';
  @Input() badge = 'BREADCRUMBS';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('dropdown-breadcrumb-bar');
  }
}
