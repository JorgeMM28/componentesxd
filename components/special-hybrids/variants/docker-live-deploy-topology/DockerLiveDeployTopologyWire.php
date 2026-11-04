<?php
// Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js — Laravel Livewire 3 (components/special-hybrids/variants/docker-live-deploy-topology/DockerLiveDeployTopologyWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class DockerLiveDeployTopologyWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-docker-live-deploy-topology">
            <h3>Variante 17 — Topología Docker + Simulador de Paquetes en Red con Anime.js</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
