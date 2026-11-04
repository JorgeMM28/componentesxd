<?php
// Variante 03 — Comparador Visual Before / After con Cortina Deslizable — Laravel Livewire 3 (components/accordions-tabs/variants/before-after-split/BeforeAfterSplitWire.php)
namespace App\Livewire\Cxd\AccordionsTabs;
use Livewire\Component;

class BeforeAfterSplitWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-accordions-tabs-before-after-split">
            <h3>Variante 03 — Comparador Visual Before / After con Cortina Deslizable</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
