<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ExpandableDrawerCardWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-card" data-cxd-control="expandable-drawer-card" wire:ignore><strong>Reporte de seguridad automático</strong><button type="button" data-toggle aria-expanded="true">Desplegar / ocultar diagnóstico</button><p data-detail>0 vulnerabilidades críticas · Certificados TLS renovados por 90 días.</p>@script
<script>
import('/assets/expandable-drawer-card.js').then(module => module.mountExpandableDrawerCard($wire.$el));
</script>
@endscript</div>
HTML; } }
