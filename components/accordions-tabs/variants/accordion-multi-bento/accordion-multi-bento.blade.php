{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-widget" data-cxd-control="accordion-multi-bento"><div class="cxd-widget__row"><button type="button" data-all="open">Expandir todo</button><button type="button" data-all="close">Colapsar todo</button></div><button type="button" data-open="one" aria-expanded="true">Módulo de red</button><div class="cxd-widget__panel" data-panel="one">Latencia: 8 ms</div><button type="button" data-open="two" aria-expanded="false">Módulo de datos</button><div class="cxd-widget__panel" data-panel="two" hidden>Uso: 42 GB</div></div>
<script type="module">
import { mountAccordionMultiBento } from '/assets/accordion-multi-bento.js';
document.querySelectorAll('[data-cxd-control="accordion-multi-bento"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAccordionMultiBento(root); });
</script>
