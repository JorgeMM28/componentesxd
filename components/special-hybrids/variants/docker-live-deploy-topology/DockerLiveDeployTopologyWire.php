<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class DockerLiveDeployTopologyWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-special--stages" data-cxd-control="docker-live-deploy-topology" wire:ignore><header><small>TOPOLOGÍA DE DESPLIEGUE</small><h3>Topología de despliegue</h3></header><p data-copy>Red en espera</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Traefik</button><button type="button" data-item="1" aria-pressed="false">Astro SSR</button><button type="button" data-item="2" aria-pressed="false">Postgres</button></div><strong data-output>Traefik</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Enviar paquete</button><button type="button" data-reset>Restaurar</button></div><span role="status">Red en espera</span></section>
HTML; } }
