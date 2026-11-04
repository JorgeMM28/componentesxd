{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-carousel" data-cxd-control="split-editorial-showcase"><div class="cxd-split"><div data-art aria-hidden="true">✦</div><div><small>COLECCIÓN EDITORIAL</small><h3 data-title>Aurora</h3><p data-description>Luz y color para una interfaz expresiva.</p></div></div><div class="cxd-carousel__controls"><button type="button" data-prev aria-label="Anterior">← Anterior</button><button type="button" data-next aria-label="Siguiente">Siguiente →</button></div><span role="status" aria-live="polite"></span></div>
<script type="module">
import { mountSplitEditorialShowcase } from '/assets/split-editorial-showcase.js';
document.querySelectorAll('[data-cxd-control="split-editorial-showcase"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountSplitEditorialShowcase(root); });
</script>
