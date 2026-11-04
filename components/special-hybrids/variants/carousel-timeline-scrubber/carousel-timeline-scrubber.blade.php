{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="carousel-timeline-scrubber"><h3>Línea de tiempo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Avanzar escena</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Escena inicial</span></div>
<script type="module">
import { mountCarouselTimelineScrubber } from '/assets/carousel-timeline-scrubber.js';
document.querySelectorAll('[data-cxd-control="carousel-timeline-scrubber"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountCarouselTimelineScrubber(root); });
</script>
