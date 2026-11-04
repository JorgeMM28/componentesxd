<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class ThumbnailFilmstripWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="thumbnail-filmstrip" wire:ignore><div class="cxd-carousel__item cxd-film-main" data-main>✦ Aurora</div><div class="cxd-filmstrip" aria-label="Seleccionar imagen"><button type="button" data-thumb="✦ Aurora" aria-pressed="true">✦ Aurora</button><button type="button" data-thumb="◉ Órbita" aria-pressed="false">◉ Órbita</button><button type="button" data-thumb="✳ Nébula" aria-pressed="false">✳ Nébula</button></div><span role="status">Imagen: Aurora</span>@script
<script>
import('/assets/thumbnail-filmstrip.js').then(module => module.mountThumbnailFilmstrip($wire.$el));
</script>
@endscript</div>
HTML; } }
