<?php
// Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4) — Laravel Livewire 3 (components/docker/variants/fullstack-compose-stack/FullstackComposeStackWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class FullstackComposeStackWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-fullstack-compose-stack">
            <h3>Variante 04 — Docker Compose Fullstack (App + Postgres 17 + Redis 7.4)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
