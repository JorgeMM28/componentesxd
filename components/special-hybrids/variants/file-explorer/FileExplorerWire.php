<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class FileExplorerWire extends Component { public function render(): string { return <<<'HTML'
<section class="cxd-special cxd-files" data-cxd-control="file-explorer" wire:ignore><header><small>/PROYECTO</small><h3 data-file-title>src/components</h3></header><nav data-tree><button type="button" data-folder="src">▾ src</button><button type="button" data-file="LivePreview.astro">　LivePreview.astro</button><button type="button" data-file="tokens.css">　tokens.css</button><button type="button" data-file="README.md">README.md</button></nav><pre data-file-preview>Selecciona un archivo para ver su resumen.</pre><span role="status">4 elementos indexados.</span></section>
HTML; } }
