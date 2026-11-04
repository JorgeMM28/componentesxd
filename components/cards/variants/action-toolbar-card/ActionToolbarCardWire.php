<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ActionToolbarCardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="action-toolbar-card" wire:ignore><span>REPOSITORIO // CORE-UI</span><h3>Paquete de componentes</h3><p>Una tarjeta con acciones independientes.</p><div class="cxd-card__actions"><button type="button" data-star aria-pressed="false">Estrella (<span data-count>142</span>)</button><button type="button" data-action="Enlace listo para compartir">Compartir</button><button type="button" data-action="Repositorio preparado">Clonar</button></div><span role="status">Listo</span>@script
<script>
import('/assets/action-toolbar-card.js').then(module => module.mountActionToolbarCard($wire.$el));
</script>
@endscript</div>
HTML; } }
