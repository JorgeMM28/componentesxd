<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FileTreeInspectorWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-widget" data-cxd-control="file-tree-inspector" wire:ignore><div class="cxd-widget__columns"><div class="cxd-widget__list"><strong>src/</strong><div><button type="button" data-file="index.astro">index.astro</button></div><div><button type="button" data-file="tokens.css">tokens.css</button></div></div><div class="cxd-widget__list"><strong>Inspector</strong><p data-output>Selecciona un archivo</p></div></div>@script
<script>
import('/assets/file-tree-inspector.js').then(module => module.mountFileTreeInspector($wire.$el));
</script>
@endscript</div>
HTML; } }
