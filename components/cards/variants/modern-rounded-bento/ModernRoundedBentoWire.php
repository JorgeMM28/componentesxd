<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ModernRoundedBentoWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="modern-rounded-bento" wire:ignore><span>MODERN BENTO · +31.4%</span><h3>Rendimiento global de red</h3><strong data-metric>2.48M req/s</strong><p>Una tarjeta con iluminación que sigue al cursor.</p>@script
<script>
import('/assets/modern-rounded-bento.js').then(module => module.mountModernRoundedBento($wire.$el));
</script>
@endscript</div>
HTML; } }
