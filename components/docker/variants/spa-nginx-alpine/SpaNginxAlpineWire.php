<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SpaNginxAlpineWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-docker-flow" data-cxd-control="spa-nginx-alpine" wire:ignore><h3>SPA + Nginx</h3><ol class="cxd-docker-flow__stages" data-stages><li class="cxd-docker-flow__stage" data-stage aria-current="true">Generar bundle Vite</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Resolver rutas con try_files</li><li class="cxd-docker-flow__stage" data-stage aria-current="false">Servir assets inmutables</li></ol><div class="cxd-docker-flow__actions"><button type="button" data-run>Simular siguiente salto</button><button type="button" data-reset>Reiniciar topología</button></div><span role="status" aria-live="polite">Listo para simular la topología.</span></section>
HTML; } }
