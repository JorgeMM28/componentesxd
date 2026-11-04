{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-table" data-cxd-control="expandable-detail"><table><thead><tr><th>Incidente</th><th>Estado</th></tr></thead><tbody><tr><td><button type="button" data-expand="one" aria-expanded="false">INC-4091 · Latencia</button></td><td>SEV-2</td></tr><tr data-detail="one" hidden><td>Tráfico normalizado al 100%.</td><td>Resuelto</td></tr><tr><td><button type="button" data-expand="two" aria-expanded="false">DEP-8820 · Actualización</button></td><td>Completado</td></tr><tr data-detail="two" hidden><td>24 nodos reiniciados.</td><td>Sin pérdida</td></tr></tbody></table></div>
<script type="module">
import { mountExpandableDetail } from '/assets/expandable-detail.js';
document.querySelectorAll('[data-cxd-control="expandable-detail"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountExpandableDetail(root); });
</script>
