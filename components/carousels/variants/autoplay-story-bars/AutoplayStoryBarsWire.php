<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class AutoplayStoryBarsWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="autoplay-story-bars" wire:ignore><div class="cxd-story-bars" aria-label="Historias"><button type="button" data-story="0" aria-label="Historia 1"><span></span></button><button type="button" data-story="1" aria-label="Historia 2"><span></span></button><button type="button" data-story="2" aria-label="Historia 3"><span></span></button></div><div class="cxd-carousel__item" data-content><strong>Historia 1</strong><p>Explora la colección.</p></div><div class="cxd-carousel__controls"><button type="button" data-play aria-pressed="false">Reproducir</button></div><span role="status"></span>@script
<script>
import('/assets/autoplay-story-bars.js').then(module => module.mountAutoplayStoryBars($wire.$el));
</script>
@endscript</div>
HTML; } }
