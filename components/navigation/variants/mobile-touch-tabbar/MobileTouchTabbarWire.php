<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class MobileTouchTabbarWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-nav cxd-nav--mobile" data-cxd-control="mobile-touch-tabbar" wire:ignore><button type="button" data-destination="Inicio" aria-pressed="true">Inicio</button><button type="button" data-destination="Biblioteca" aria-pressed="false">Biblioteca</button><button type="button" data-destination="Motion" aria-pressed="false">Motion</button><button type="button" data-destination="Métricas" aria-pressed="false">Métricas</button><span role="status">Vista activa: Inicio</span>@script
<script>
import('/assets/mobile-touch-tabbar.js').then(module => module.mountMobileTouchTabbar($wire.$el));
</script>
@endscript</div>
HTML; } }
