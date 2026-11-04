<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class StylelessMinimalNavWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--bare" data-cxd-control="styleless-minimal-nav" wire:ignore><button type="button" data-destination="Resumen" aria-pressed="true">Resumen</button><button type="button" data-destination="Actividad" aria-pressed="false">Actividad</button><button type="button" data-destination="Ajustes" aria-pressed="false">Ajustes</button><span role="status">Vista activa: Resumen</span>@script
<script>
import('/assets/styleless-minimal-nav.js').then(module => module.mountStylelessMinimalNav($wire.$el));
</script>
@endscript</div>
HTML; } }
