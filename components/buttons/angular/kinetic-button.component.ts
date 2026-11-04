/**
 * ============================================================================
 * COMPONENTESXD — KINETIC BUTTON (ANGULAR STANDALONE)
 * Archivo: components/buttons/angular/kinetic-button.component.ts
 * ============================================================================
 */
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'cxd-kinetic-button',
  standalone: true,
  styleUrls: ['../css-scss/buttons.css'],
  template: `
    <button
      type="button"
      class="cxd-btn cxd-btn--{{ variant }}"
      [class.is-loading]="loading"
      [style.transform]="transformStyle()"
      (mousemove)="onMove($event)"
      (mouseleave)="reset()"
    >
      <span class="cxd-btn__spinner"></span>
      <ng-content></ng-content>
    </button>
  `
})
export class CxdKineticButtonComponent {
  @Input() variant: 'primary' | 'shimmer' | 'glass' | 'brutalist' = 'primary';
  @Input() loading = false;
  @Input() magnetic = true;

  transformStyle = signal<string>('');

  onMove(e: MouseEvent) {
    if (!this.magnetic) return;
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) * 0.25).toFixed(1);
    const y = ((e.clientY - rect.top - rect.height / 2) * 0.25).toFixed(1);
    this.transformStyle.set(`translate3d(${x}px, ${y}px, 0)`);
  }

  reset() {
    this.transformStyle.set('');
  }
}

