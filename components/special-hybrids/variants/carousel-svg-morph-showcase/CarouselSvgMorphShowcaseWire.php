<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CarouselSvgMorphShowcaseWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="carousel-svg-morph-showcase" wire:ignore><h3>Carrusel de escenas SVG</h3><div class="cxd-special__scene"><svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true"><polygon data-shape points="60,10 110,60 60,110 10,60" fill="#9b82ff"></polygon></svg><strong data-title></strong><p data-copy></p></div><div class="cxd-special__actions"><button type="button" data-prev>Anterior</button><button type="button" data-next>Siguiente</button><button type="button" data-reset>Reiniciar</button></div><span role="status"></span>@script
<script>
import('/assets/carousel-svg-morph-showcase.js').then(module => module.mountCarouselSvgMorphShowcase($wire.$el));
</script>
@endscript</div>
HTML; } }
