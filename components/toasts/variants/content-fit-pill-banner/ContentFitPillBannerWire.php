<?php
// Variante 07 — Banner Content-Fit Flotante Tipo Píldora — Laravel Livewire 3 (components/toasts/variants/content-fit-pill-banner/ContentFitPillBannerWire.php)
namespace App\Livewire\Cxd\Toasts;
use Livewire\Component;

class ContentFitPillBannerWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-toasts-content-fit-pill-banner">
            <h3>Variante 07 — Banner Content-Fit Flotante Tipo Píldora</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
