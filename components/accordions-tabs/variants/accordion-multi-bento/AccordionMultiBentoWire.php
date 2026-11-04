<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AccordionMultiBentoWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="accordion-multi-bento" wire:ignore><div class="cxd-widget__row"><button type="button" data-all="open">Expandir todo</button><button type="button" data-all="close">Colapsar todo</button></div><button type="button" data-open="one" aria-expanded="true">Módulo de red</button><div class="cxd-widget__panel" data-panel="one">Latencia: 8 ms</div><button type="button" data-open="two" aria-expanded="false">Módulo de datos</button><div class="cxd-widget__panel" data-panel="two" hidden>Uso: 42 GB</div>@script
<script>
import('/assets/accordion-multi-bento.js').then(module => module.mountAccordionMultiBento($wire.$el));
</script>
@endscript</div>
HTML; } }
