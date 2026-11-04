<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveCmdkPaletteWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-dialog" data-cxd-control="interactive-cmdk-palette" wire:ignore><button type="button" data-open>Abrir comandos</button><span role="status">Selecciona un comando</span><dialog aria-label="Paleta de comandos"><h3>Paleta de comandos</h3><label>Buscar <input type="search" data-search placeholder="Escribe un comando" /></label><div class="cxd-dialog__list"><button type="button" data-command="Abrir catálogo">Abrir catálogo</button><button type="button" data-command="Ver animaciones">Ver animaciones</button><button type="button" data-command="Cambiar interfaz">Cambiar interfaz</button></div><button type="button" data-close>Cerrar</button></dialog>@script
<script>
import('/assets/interactive-cmdk-palette.js').then(module => module.mountInteractiveCmdkPalette($wire.$el));
</script>
@endscript</div>
HTML; } }
