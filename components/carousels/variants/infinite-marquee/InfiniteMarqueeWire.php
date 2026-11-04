<?php
namespace App\Livewire;
use Livewire\Component;
// Incluye styles.css y ajusta la ruta del módulo.
class InfiniteMarqueeWire extends Component { public function render(): string { return <<<'HTML'
<div class="cxd-carousel" data-cxd-control="infinite-marquee" wire:ignore><div class="cxd-marquee"><div class="cxd-marquee-track" data-track><div class="cxd-marquee-group" data-group><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div><div class="cxd-marquee-group" aria-hidden="true"><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div></div></div><div class="cxd-carousel__controls"><button type="button" data-play aria-pressed="false">Reproducir</button><button type="button" data-direction>Invertir dirección</button><label>Velocidad <input type="range" data-speed min="10" max="120" value="40" /></label></div><span role="status">Pausado</span>@script
<script>
import('/assets/infinite-marquee.js').then(module => module.mountInfiniteMarquee($wire.$el));
</script>
@endscript</div>
HTML; } }
