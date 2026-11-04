<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CardDeckThrowWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="card-deck-throw" wire:ignore><div class="cxd-deck"><article class="cxd-carousel__item" data-slide><small>01 / 04</small><strong>Aurora</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>02 / 04</small><strong>Órbita</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>03 / 04</small><strong>Nébula</strong><p>Una nueva perspectiva para explorar.</p></article><article class="cxd-carousel__item" data-slide><small>04 / 04</small><strong>Horizonte</strong><p>Una nueva perspectiva para explorar.</p></article></div><div class="cxd-carousel__controls"><button type="button" data-dismiss>Descartar tarjeta</button><button type="button" data-reset>Restaurar mazo</button></div><span role="status"></span>@script
<script>
import('/assets/card-deck-throw.js').then(module => module.mountCardDeckThrow($wire.$el));
</script>
@endscript</div>
HTML; } }
