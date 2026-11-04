// Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG) — Angular 18+ Signals (components/special-hybrids/variants/git-branch-commit-visualizer/git-branch-commit-visualizer.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-git-branch-commit-visualizer',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-git-branch-commit-visualizer" [attr.data-active]="active()">
      <h3>Variante 29 — Diagrama Interactivo de Grafo Git Multirama (main, develop, feat/anime, Tags & Merge Curves SVG)</h3>
      <p>Diagrama vectorial de gran formato con 3 carriles de ramas, curvas Bezier autodibujables (svg.createDrawable), etiquetas de versión (v4.0 a v4.x), creación de commits, merges e inspector de SHA en vivo.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdGitBranchCommitVisualizerComponent {
  active = signal(false);
}
