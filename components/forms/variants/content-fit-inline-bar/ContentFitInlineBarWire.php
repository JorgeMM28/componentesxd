<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ContentFitInlineBarWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-form cxd-form--inline" data-cxd-control="content-fit-inline-bar" wire:ignore><span>https://</span><input type="text" data-domain value="mi-proyecto.dev" aria-label="Dominio" /><button type="button" data-connect>Conectar dominio</button><span role="status">Listo</span>@script
<script>
import('/assets/content-fit-inline-bar.js').then(module => module.mountContentFitInlineBar($wire.$el));
</script>
@endscript</div>
HTML; } }
