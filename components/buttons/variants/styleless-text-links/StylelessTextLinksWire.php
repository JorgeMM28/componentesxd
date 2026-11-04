<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css en tus assets.
class StylelessTextLinksWire extends Component {
    public int $active = -1;
    public array $items = [['documentation','Explorar Documentación Técnica','Abriendo especificación técnica v4.2...'],['download','Descargar Especificación Raw','Descargando manifiesto raw (42 KB)...']];
    public function select(int $index): void { if (isset($this->items[$index])) $this->active = $index; }
    public function render(): string { return <<<'HTML'
<div class="cxd-text-links">@foreach ($items as $index => $item)<button type="button" class="cxd-text-links__button cxd-text-links__button--{{ $item[0] }}" aria-pressed="{{ $active === $index ? 'true' : 'false' }}" wire:click="select({{ $index }})">{{ $item[1] }}</button>@endforeach<span class="cxd-text-links__status" role="status">{{ $active < 0 ? 'Selecciona una opción' : 'RUTA ACTIVA: ' . $items[$active][2] }}</span></div>
HTML; }
}
