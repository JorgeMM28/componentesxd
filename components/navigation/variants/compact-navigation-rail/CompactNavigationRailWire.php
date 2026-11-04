<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CompactNavigationRailWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--rail" data-cxd-control="compact-navigation-rail" wire:ignore><button type="button" data-destination="Consola" aria-label="Consola" aria-pressed="true">⌘</button><button type="button" data-destination="Catálogo" aria-label="Catálogo" aria-pressed="false">▦</button><button type="button" data-destination="Métricas" aria-label="Métricas" aria-pressed="false">◉</button><span role="status">Vista activa: Consola</span>@script
<script>
import('/assets/compact-navigation-rail.js').then(module => module.mountCompactNavigationRail($wire.$el));
</script>
@endscript</div>
HTML; } }
