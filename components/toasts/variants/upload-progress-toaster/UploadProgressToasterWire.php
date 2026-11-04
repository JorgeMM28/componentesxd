<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class UploadProgressToasterWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="upload-progress-toaster" wire:ignore><strong>Subiendo artefactos de producción</strong><span data-percent>0%</span><progress data-progress max="100" value="0" aria-label="Progreso de subida"></progress><button type="button" data-start>Simular subida</button><button type="button" data-pause>Pausar</button><span role="status">Listo</span>@script
<script>
import('/assets/upload-progress-toaster.js').then(module => module.mountUploadProgressToaster($wire.$el));
</script>
@endscript</div>
HTML; } }
