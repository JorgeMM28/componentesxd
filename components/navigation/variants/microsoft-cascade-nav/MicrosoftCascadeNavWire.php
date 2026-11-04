<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class MicrosoftCascadeNavWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="microsoft-cascade-nav" wire:ignore><button type="button" data-category="Componentes" aria-expanded="false">Componentes</button><button type="button" data-category="Animaciones" aria-expanded="false">Animaciones</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-group="Componentes" data-leaf="Tablas">Tablas</button><button type="button" data-group="Componentes" data-leaf="Botones">Botones</button><button type="button" data-group="Componentes" data-leaf="Formularios">Formularios</button><button type="button" data-group="Animaciones" data-leaf="SVG" hidden>SVG</button><button type="button" data-group="Animaciones" data-leaf="Timelines" hidden>Timelines</button></div><span role="status">Selecciona una categoría</span>@script
<script>
import('/assets/microsoft-cascade-nav.js').then(module => module.mountMicrosoftCascadeNav($wire.$el));
</script>
@endscript</div>
HTML; } }
