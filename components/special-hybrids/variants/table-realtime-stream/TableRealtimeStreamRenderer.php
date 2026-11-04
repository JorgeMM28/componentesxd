<?php
declare(strict_types=1);
// Incluye styles.css y ajusta la ruta del módulo.
function renderTableRealtimeStream(): string { return <<<'HTML'
<div class="cxd-special" data-cxd-control="table-realtime-stream"><h3>Registros en directo</h3><form data-form><label>Nombre <input name="name" required maxlength="40" /></label><label>Valor <input name="value" type="number" min="0" max="9999" required /></label><button type="submit">Agregar registro</button></form><table><thead><tr><th>Nombre</th><th>Valor</th><th>Acción</th></tr></thead><tbody data-rows></tbody></table><span role="status" data-total>0 registros · total 0</span></div>
<script type="module">
import { mountTableRealtimeStream } from '/assets/table-realtime-stream.js';
document.querySelectorAll('[data-cxd-control="table-realtime-stream"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountTableRealtimeStream(root); });
</script>
HTML; }
