<?php
// Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort) — Laravel Livewire 3 (components/special-hybrids/variants/sorting-algorithm-symphony/SortingAlgorithmSymphonyWire.php)
namespace App\Livewire\Cxd\SpecialHybrids;
use Livewire\Component;

class SortingAlgorithmSymphonyWire extends Component {
    public bool $active = false;
    public function toggle(): void { $this->active = !$this->active; }
    public function render() {
        return <<<'HTML'
        <div class="cxd-special-hybrids-sorting-algorithm-symphony">
            <h3>Variante 24 — Visualizador Paso a Paso de Algoritmos de Ordenamiento (QuickSort, BubbleSort, SelectionSort, InsertionSort)</h3>
            <button type="button" wire:click="toggle">Estado: {{ $active ? 'ON' : 'OFF' }}</button>
        </div>
        HTML;
    }
}
