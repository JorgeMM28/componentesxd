<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SlideDrawerInspectorWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog cxd-dialog--drawer" data-cxd-control="slide-drawer-inspector" wire:ignore><button type="button" data-open>Abrir inspector</button><span role="status">Inspector cerrado</span><dialog aria-label="Inspector lateral"><h3>Inspector de recurso</h3><div class="cxd-dialog__actions"><button type="button" data-tab="details" aria-pressed="true">Propiedades</button><button type="button" data-tab="json" aria-pressed="false">JSON</button></div><p data-panel="details">Región: us-east-1 · Estado: activo</p><pre data-panel="json" hidden>&#123; "region": "us-east-1", "activo": true &#125;</pre><button type="button" data-close>Cerrar</button></dialog>@script
<script>
import('/assets/slide-drawer-inspector.js').then(module => module.mountSlideDrawerInspector($wire.$el));
</script>
@endscript</div>
HTML; } }
