{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-data" data-cxd-control="interactive-accordion"><div class="cxd-data__list"><div class="cxd-data__item"><button type="button" data-open="one" aria-expanded="true">01 · Tokens CSS</button><p data-panel="one">Colores, radios y tipografías mediante variables.</p></div><div class="cxd-data__item"><button type="button" data-open="two" aria-expanded="false">02 · Arquitectura de islas</button><p data-panel="two" hidden>Hidratación selectiva de componentes interactivos.</p></div></div></div>
<script type="module">
import { mountInteractiveAccordion } from '/assets/interactive-accordion.js';
document.querySelectorAll('[data-cxd-control="interactive-accordion"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountInteractiveAccordion(root); });
</script>
