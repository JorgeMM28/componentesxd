<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SplitEditorialShowcaseWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="split-editorial-showcase" wire:ignore><div class="cxd-split"><div data-art aria-hidden="true">✦</div><div><small>COLECCIÓN EDITORIAL</small><h3 data-title>Aurora</h3><p data-description>Luz y color para una interfaz expresiva.</p></div></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span>@script
<script>
import('/assets/split-editorial-showcase.js').then(module => module.mountSplitEditorialShowcase($wire.$el));
</script>
@endscript</div>
HTML; } }
