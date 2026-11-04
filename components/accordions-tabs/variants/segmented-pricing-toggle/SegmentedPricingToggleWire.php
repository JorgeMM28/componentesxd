<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class SegmentedPricingToggleWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="segmented-pricing-toggle" wire:ignore><div class="cxd-widget__row"><button type="button" data-period="monthly" aria-pressed="true">Mensual</button><button type="button" data-period="yearly" aria-pressed="false">Anual · 20% menos</button></div><strong data-price>$20 / mes</strong><span role="status">Facturación mensual</span>@script
<script>
import('/assets/segmented-pricing-toggle.js').then(module => module.mountSegmentedPricingToggle($wire.$el));
</script>
@endscript</div>
HTML; } }
