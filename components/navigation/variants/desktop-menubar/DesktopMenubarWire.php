<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class DesktopMenubarWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav" data-cxd-control="desktop-menubar" wire:ignore><button type="button" data-menu-trigger aria-expanded="false">Archivo</button><button type="button" data-menu-trigger aria-expanded="false">Edición</button><button type="button" data-menu-trigger aria-expanded="false">Git</button><div class="cxd-nav__menu" data-menu hidden><button type="button" data-command="Nuevo">Nuevo</button><button type="button" data-command="Guardar">Guardar</button><button type="button" data-command="Exportar">Exportar</button></div><span role="status">Selecciona un menú</span>@script
<script>
import('/assets/desktop-menubar.js').then(module => module.mountDesktopMenubar($wire.$el));
</script>
@endscript</div>
HTML; } }
