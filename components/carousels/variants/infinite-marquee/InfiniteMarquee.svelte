<script lang="ts">
import { mountInfiniteMarquee } from './infinite-marquee.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountInfiniteMarquee(node) }; }
</script>
<div class="cxd-carousel" data-cxd-control="infinite-marquee" use:control><div class="cxd-marquee"><div class="cxd-marquee-track" data-track><div class="cxd-marquee-group" data-group><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div><div class="cxd-marquee-group" aria-hidden="true"><span>React</span><span>Vue</span><span>Svelte</span><span>Astro</span><span>Anime.js</span></div></div></div><div class="cxd-carousel__controls"><button type="button" data-play aria-pressed="false">Reproducir</button><button type="button" data-direction>Invertir dirección</button><label>Velocidad <input type="range" data-speed min="10" max="120" value="40" /></label></div><span role="status">Pausado</span></div>
