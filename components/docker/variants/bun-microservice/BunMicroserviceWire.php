<?php
// Variante 05 — Microservicio Ultra-Rápido con Bun Alpine — Laravel Livewire 3 (components/docker/variants/bun-microservice/BunMicroserviceWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class BunMicroserviceWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-bun-microservice">
            <h3>Variante 05 — Microservicio Ultra-Rápido con Bun Alpine</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
