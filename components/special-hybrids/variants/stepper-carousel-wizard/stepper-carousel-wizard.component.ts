// Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline — Angular 18+ Signals (components/special-hybrids/variants/stepper-carousel-wizard/stepper-carousel-wizard.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-stepper-carousel-wizard',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-special-hybrids-stepper-carousel-wizard" [attr.data-active]="active()">
      <h3>Variante 01 — Step-by-Step Wizard + Carrusel 3D Sincronizado + Timeline</h3>
      <p>Asistente paso a paso donde avanzar o retroceder sincroniza la barra de progreso superior, desliza el carrusel 3D y anima los sub-elementos con stagger.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdStepperCarouselWizardComponent {
  active = signal(false);
}
