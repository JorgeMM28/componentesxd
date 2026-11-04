<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FloatingPillNavbarWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--pill" data-cxd-control="floating-pill-navbar" wire:ignore><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Componentes" aria-pressed="false">Componentes</button><button type="button" data-destination="Animaciones" aria-pressed="false">Animaciones</button><span role="status">Vista activa: Inicio</span>@script
<script>
import('/assets/floating-pill-navbar.js').then(module => module.mountFloatingPillNavbar($wire.$el));
</script>
@endscript</div>
HTML; } }
