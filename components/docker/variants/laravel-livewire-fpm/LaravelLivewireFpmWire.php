<?php
// Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache — Laravel Livewire 3 (components/docker/variants/laravel-livewire-fpm/LaravelLivewireFpmWire.php)
namespace App\Livewire\Cxd\Docker;
use Livewire\Component;

class LaravelLivewireFpmWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-docker-laravel-livewire-fpm">
            <h3>Variante 02 — Laravel 11 + Livewire 3 + PHP 8.3 FPM + OPcache</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
