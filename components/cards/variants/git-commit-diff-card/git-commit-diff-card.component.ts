/**
 * ============================================================================
 * COMPONENTESXD — 04. Git Commit & Code Diff Inspection Card (ANGULAR 18+ STANDALONE SIGNALS)
 * Archivo: components/cards/variants/git-commit-diff-card/git-commit-diff-card.component.ts
 * ============================================================================
 */
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxd-git-commit-diff-card',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./styles.css'],
  template: `
    <section class="cxd-cards-git-commit-diff-card" [attr.data-theme]="interfaceTheme">
      <header class="cxd-cards-git-commit-diff-card__header">
        <span>{{ title }}</span>
        <span class="cxd-badge">{{ badge }}</span>
      </header>
      <div class="cxd-cards-git-commit-diff-card__body">
        <p>Superficie para visualizar hash de commit, rama, líneas añadidas/eliminadas y bloque diff coloreado.</p>
        <button type="button" class="cxd-btn" (click)="trigger()">
          Estado: {{ state() }}
        </button>
      </div>
    </section>
  `
})
export class CxdGitCommitDiffCardComponent {
  @Input() title = '04. Git Commit & Code Diff Inspection Card';
  @Input() badge = 'VERSION CONTROL';
  @Input() interfaceTheme?: string;
  @Output() action = new EventEmitter<string>();

  state = signal<'ready' | 'triggered'>('ready');

  trigger() {
    this.state.set('triggered');
    this.action.emit('git-commit-diff-card');
  }
}
