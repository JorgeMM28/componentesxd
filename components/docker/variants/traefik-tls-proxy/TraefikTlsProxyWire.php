<?php
// Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático — Laravel Livewire 3 (components/docker/variants/traefik-tls-proxy/TraefikTlsProxyWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class TraefikTlsProxyWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-traefik-tls-proxy">
            <h3>Variante 06 — Proxy Inverso Traefik v3 con Balanceo Automático</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
