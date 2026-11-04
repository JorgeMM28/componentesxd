<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InteractiveTabbedCardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="interactive-tabbed-card" wire:ignore><div class="cxd-card__actions"><button type="button" data-tab="summary" aria-pressed="true">Resumen</button><button type="button" data-tab="metrics" aria-pressed="false">Métricas</button><button type="button" data-tab="settings" aria-pressed="false">Ajustes</button></div><p data-panel="summary">Estado general: 99.99% de disponibilidad.</p><p data-panel="metrics" hidden>Latencia media: 7.2 ms · Memoria: 41.2 GB.</p><p data-panel="settings" hidden>Autoescalado habilitado: 4 a 32 nodos.</p>@script
<script>
import('/assets/interactive-tabbed-card.js').then(module => module.mountInteractiveTabbedCard($wire.$el));
</script>
@endscript</div>
HTML; } }
