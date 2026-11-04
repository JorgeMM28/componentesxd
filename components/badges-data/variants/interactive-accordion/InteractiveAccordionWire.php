<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveAccordionWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="interactive-accordion" wire:ignore><div class="cxd-data__list"><div class="cxd-data__item"><button type="button" data-open="one" aria-expanded="true">01 · Tokens CSS</button><p data-panel="one">Colores, radios y tipografías mediante variables.</p></div><div class="cxd-data__item"><button type="button" data-open="two" aria-expanded="false">02 · Arquitectura de islas</button><p data-panel="two" hidden>Hidratación selectiva de componentes interactivos.</p></div></div>@script
<script>
import('/assets/interactive-accordion.js').then(module => module.mountInteractiveAccordion($wire.$el));
</script>
@endscript</div>
HTML; } }
