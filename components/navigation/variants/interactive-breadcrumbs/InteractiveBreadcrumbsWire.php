<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveBreadcrumbsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="interactive-breadcrumbs" wire:ignore><nav aria-label="Ruta de navegación"><button type="button" data-path="Inicio">Inicio</button><span> / </span><button type="button" data-path="Componentes">Componentes</button><span> / </span><button type="button" data-path="Botones">Botones</button></nav><span role="status">Ruta actual: Inicio / Componentes / Botones</span>@script
<script>
import('/assets/interactive-breadcrumbs.js').then(module => module.mountInteractiveBreadcrumbs($wire.$el));
</script>
@endscript</div>
HTML; } }
