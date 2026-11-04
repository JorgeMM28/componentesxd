<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractivePaginationWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="interactive-pagination" wire:ignore><button type="button" data-step="-1">Anterior</button><button type="button" data-page="1" aria-current="page">1</button><button type="button" data-page="2">2</button><button type="button" data-page="3">3</button><button type="button" data-step="1">Siguiente</button><span role="status">Página 1 de 3</span>@script
<script>
import('/assets/interactive-pagination.js').then(module => module.mountInteractivePagination($wire.$el));
</script>
@endscript</div>
HTML; } }
