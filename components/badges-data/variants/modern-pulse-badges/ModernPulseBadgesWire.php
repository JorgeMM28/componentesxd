<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ModernPulseBadgesWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="modern-pulse-badges" wire:ignore><span class="cxd-data__tag">OPERATIONAL</span><span class="cxd-data__tag">DEGRADED</span><span class="cxd-data__tag">OUTAGE</span><button type="button" data-tag>astro-5 ×</button><button type="button" data-tag>animejs-v4 ×</button><button type="button" data-tag>typescript ×</button><button type="button" data-restore>Restaurar etiquetas</button><span role="status">3 etiquetas activas</span>@script
<script>
import('/assets/modern-pulse-badges.js').then(module => module.mountModernPulseBadges($wire.$el));
</script>
@endscript</div>
HTML; } }
