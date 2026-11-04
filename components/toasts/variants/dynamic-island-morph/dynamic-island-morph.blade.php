{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph"><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span></div>
<script type="module">
import { mountDynamicIslandMorph } from '/assets/dynamic-island-morph.js';
document.querySelectorAll('[data-cxd-control="dynamic-island-morph"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountDynamicIslandMorph(root); });
</script>
