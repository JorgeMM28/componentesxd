<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AccordionExclusiveWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="accordion-exclusive" wire:ignore><button type="button" data-open="one" aria-expanded="true">01 · Tokens</button><div class="cxd-widget__panel" data-panel="one">Colores y tipografía.</div><button type="button" data-open="two" aria-expanded="false">02 · Componentes</button><div class="cxd-widget__panel" data-panel="two" hidden>Bloques reutilizables.</div><button type="button" data-open="three" aria-expanded="false">03 · Animaciones</button><div class="cxd-widget__panel" data-panel="three" hidden>Movimiento e interacción.</div>@script
<script>
import('/assets/accordion-exclusive.js').then(module => module.mountAccordionExclusive($wire.$el));
</script>
@endscript</div>
HTML; } }
