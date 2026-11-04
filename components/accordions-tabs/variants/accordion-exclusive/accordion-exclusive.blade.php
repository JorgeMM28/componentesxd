{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-widget" data-cxd-control="accordion-exclusive"><button type="button" data-open="one" aria-expanded="true">01 · Tokens</button><div class="cxd-widget__panel" data-panel="one">Colores y tipografía.</div><button type="button" data-open="two" aria-expanded="false">02 · Componentes</button><div class="cxd-widget__panel" data-panel="two" hidden>Bloques reutilizables.</div><button type="button" data-open="three" aria-expanded="false">03 · Animaciones</button><div class="cxd-widget__panel" data-panel="three" hidden>Movimiento e interacción.</div></div>
<script type="module">
import { mountAccordionExclusive } from '/assets/accordion-exclusive.js';
document.querySelectorAll('[data-cxd-control="accordion-exclusive"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAccordionExclusive(root); });
</script>
