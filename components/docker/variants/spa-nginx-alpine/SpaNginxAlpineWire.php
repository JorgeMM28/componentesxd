<?php
// Variante 03 — React / Vue / Svelte / Angular SPA + Nginx — Laravel Livewire 3 (components/docker/variants/spa-nginx-alpine/SpaNginxAlpineWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class SpaNginxAlpineWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-spa-nginx-alpine">
            <h3>Variante 03 — React / Vue / Svelte / Angular SPA + Nginx</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
