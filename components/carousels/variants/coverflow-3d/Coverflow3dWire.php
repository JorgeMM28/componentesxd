<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class Coverflow3dWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="coverflow-3d" wire:ignore aria-label="Carrusel coverflow"><div class="cxd-carousel__viewport cxd-coverflow"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span>@script
<script>
import('/assets/coverflow-3d.js').then(module => module.mountCoverflow3d($wire.$el));
</script>
@endscript</div>
HTML; } }
