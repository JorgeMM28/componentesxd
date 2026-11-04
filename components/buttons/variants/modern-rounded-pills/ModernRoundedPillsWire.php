<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css en tus assets.
class ModernRoundedPillsWire extends Component {
    public int $active = -1;
    public array $items = [['primary','Botón Píldora Moderno','Despliegue Iniciado'],['soft','Secundario Suave','Modo Previsualización Activo'],['outline','Contorno Redondeado','Sincronizado con Éxito']];
    public function select(int $index): void { if (isset($this->items[$index])) $this->active = $index; }
    public function render(): string { return <<<'HTML'
<div class="cxd-pills">@foreach ($items as $index => $item)<button type="button" class="cxd-pills__button cxd-pills__button--{{ $item[0] }}" aria-pressed="{{ $active === $index ? 'true' : 'false' }}" wire:click="select({{ $index }})">{{ $item[1] }}</button>@endforeach<span class="cxd-pills__status" role="status">{{ $active < 0 ? 'Selecciona una acción' : 'ACCIÓN EJECUTADA: ' . $items[$active][2] }}</span></div>
HTML; }
}
