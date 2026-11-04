{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<div class="cxd-special" data-cxd-control="flow-editor"><h3>Editor de flujo</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Conectar paso</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Flujo restaurado</span></div>
<script type="module">
import { mountFlowEditor } from '/assets/flow-editor.js';
document.querySelectorAll('[data-cxd-control="flow-editor"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountFlowEditor(root); });
</script>
