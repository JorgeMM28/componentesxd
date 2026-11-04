<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ModernFloatingToastWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-toast" data-cxd-control="modern-floating-toast" wire:ignore><strong>Copia de seguridad completada con éxito</strong><p>14.2 GB sincronizados en el almacenamiento encriptado.</p><button type="button" data-replay>Reiniciar barra</button><progress data-progress max="100" value="100" aria-label="Tiempo restante"></progress><span role="status">Notificación activa</span>@script
<script>
import('/assets/modern-floating-toast.js').then(module => module.mountModernFloatingToast($wire.$el));
</script>
@endscript</div>
HTML; } }
