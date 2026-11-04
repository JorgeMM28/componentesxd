<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CarouselSpringPhysicsDeckWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="carousel-spring-physics-deck" wire:ignore><h3>Mazo de inversiones</h3><div class="cxd-special__scene" data-card><small data-label></small><strong data-value></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span>@script
<script>
import('/assets/carousel-spring-physics-deck.js').then(module => module.mountCarouselSpringPhysicsDeck($wire.$el));
</script>
@endscript</div>
HTML; } }
