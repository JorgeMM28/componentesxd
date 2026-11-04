// Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — Angular 18+ Signals (components/docker/variants/laravel-livewire-fpm/laravel-livewire-fpm.component.ts)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'cxd-laravel-livewire-fpm',
  standalone: true,
  styleUrls: ['./styles.css'],
  template: `
    <div class="cxd-docker-laravel-livewire-fpm" [attr.data-active]="active()">
      <h3>Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache</h3>
      <p>Imagen lista para Laravel y Blade con OPcache JIT, Redis, PostgreSQL y Composer 2.8.</p>
      <button type="button" (click)="active.set(!active())">Alternar</button>
    </div>
  `
})
export class CxdLaravelLivewireFpmComponent {
  active = signal(false);
}
