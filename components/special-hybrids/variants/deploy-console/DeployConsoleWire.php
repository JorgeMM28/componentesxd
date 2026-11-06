<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class DeployConsoleWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-deploy" data-cxd-control="deploy-console" wire:ignore><header><small>PRODUCTION</small><h3>Consola de despliegue</h3></header><pre data-log>$ listo para desplegar</pre><div class="cxd-special__actions"><button type="button" data-deploy>Desplegar versión</button><button type="button" data-clear>Limpiar</button></div><span role="status">Build #482 preparado.</span></section>
HTML; } }
