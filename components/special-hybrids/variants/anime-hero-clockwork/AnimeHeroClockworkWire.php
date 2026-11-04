<?php
// Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4) — Laravel Livewire 3 (components/special-hybrids/variants/anime-hero-clockwork/AnimeHeroClockworkWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class AnimeHeroClockworkWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-anime-hero-clockwork">
            <h3>Variante 21 — Escenario Relojería Cinética & Onda Radial (Inspirado en el Hero Oficial de Anime.js v4)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
