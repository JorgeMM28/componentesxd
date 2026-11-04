<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ContentFitKpiBadgeWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge" wire:ignore><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p>@script
<script>
import('/assets/content-fit-kpi-badge.js').then(module => module.mountContentFitKpiBadge($wire.$el));
</script>
@endscript</div>
HTML; } }
