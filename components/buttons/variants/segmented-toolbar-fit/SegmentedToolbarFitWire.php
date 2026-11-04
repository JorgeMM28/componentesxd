<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css en tus assets.
class SegmentedToolbarFitWire extends Component {
    public int $active = 0;
    public array $items = [['one','Vista Tabla','Vista de Tabla Estructurada (10 Variantes)'],['two','Vista Tarjetas','Vista de Tarjetas Bento (8 Variantes)'],['three','Vista Grafo 3D','Vista de Grafo Vectorial 3D'],['four','JSON Raw','Inspector JSON Raw en Vivo']];
    public function select(int $index): void { if (isset($this->items[$index])) $this->active = $index; }
    public function render(): string { return <<<'HTML'
<div class="cxd-segments">@foreach ($items as $index => $item)<button type="button" class="cxd-segments__button cxd-segments__button--{{ $item[0] }}" aria-pressed="{{ $active === $index ? 'true' : 'false' }}" wire:click="select({{ $index }})">{{ $item[1] }}</button>@endforeach<span class="cxd-segments__status" role="status">{{ $active < 0 ? 'MODO ACTIVO: Vista de Tabla Estructurada (10 Variantes)' : 'MODO ACTIVO: ' . $items[$active][2] }}</span></div>
HTML; }
}
