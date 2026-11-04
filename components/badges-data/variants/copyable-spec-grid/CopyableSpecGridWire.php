<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class CopyableSpecGridWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-data" data-cxd-control="copyable-spec-grid" wire:ignore><button type="button" data-copy="cxd_public_demo">API_PUBLIC_KEY · copiar</button><button type="button" data-copy="example.test:4321">PRIMARY_ENDPOINT · copiar</button><button type="button" data-copy="sha256:demo">BUILD_DIGEST · copiar</button><span role="status">Selecciona un valor</span>@script
<script>
import('/assets/copyable-spec-grid.js').then(module => module.mountCopyableSpecGrid($wire.$el));
</script>
@endscript</div>
HTML; } }
