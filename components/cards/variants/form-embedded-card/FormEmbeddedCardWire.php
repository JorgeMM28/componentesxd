<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FormEmbeddedCardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="form-embedded-card" wire:ignore><h3>Calculadora rápida de instancia</h3><label>Núcleos vCPU <input type="number" data-input min="1" max="128" value="8" /></label><p>Costo estimado: <strong data-total>$192/mes</strong></p>@script
<script>
import('/assets/form-embedded-card.js').then(module => module.mountFormEmbeddedCard($wire.$el));
</script>
@endscript</div>
HTML; } }
