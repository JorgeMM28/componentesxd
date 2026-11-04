<?php
// Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR — Laravel Livewire 3 (components/docker/variants/astro-node-ssr/AstroNodeSsrWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class AstroNodeSsrWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-astro-node-ssr">
            <h3>Variante 01 — Astro / Node 22 Alpine Multi-Stage SSR</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
