<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class OrbitalSolarGravitySimWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="orbital-solar-gravity-sim" wire:ignore><h3>Simulador orbital</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Acelerar órbitas</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Tiempo normal</span>@script
<script>
import('/assets/orbital-solar-gravity-sim.js').then(module => module.mountOrbitalSolarGravitySim($wire.$el));
</script>
@endscript</div>
HTML; } }
