<?php
// Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip) — Laravel Livewire 3 (components/carousels/variants/thumbnail-filmstrip/ThumbnailFilmstripWire.php)
namespace App\Livewire\Cxd\Carousels;
use Livewire\Component;

class ThumbnailFilmstripWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-carousels-thumbnail-filmstrip">
            <h3>Variante 06 — Carrusel Galería con Tira Inferior de Miniaturas (Filmstrip)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
