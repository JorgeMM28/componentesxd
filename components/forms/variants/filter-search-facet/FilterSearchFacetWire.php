<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FilterSearchFacetWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form" data-cxd-control="filter-search-facet" wire:ignore><button type="button" data-filter aria-pressed="true">SSR activo</button><button type="button" data-filter aria-pressed="true">Edge ready</button><button type="button" data-filter aria-pressed="false">TypeScript strict</button><button type="button" data-filter aria-pressed="false">Dockerizado</button><span role="status">2 filtros activos</span>@script
<script>
import('/assets/filter-search-facet.js').then(module => module.mountFilterSearchFacet($wire.$el));
</script>
@endscript</div>
HTML; } }
