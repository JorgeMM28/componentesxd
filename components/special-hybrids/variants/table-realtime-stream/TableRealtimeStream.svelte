<script lang="ts">
import { mountTableRealtimeStream } from './table-realtime-stream.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountTableRealtimeStream(node) }; }
</script>
<div class="cxd-special" data-cxd-control="table-realtime-stream" use:control><h3>Registros en directo</h3><form data-form><label>Nombre <input name="name" required maxlength="40" /></label><label>Valor <input name="value" type="number" min="0" max="9999" required /></label><button type="submit">Agregar registro</button></form><table><thead><tr><th>Nombre</th><th>Valor</th><th>Acción</th></tr></thead><tbody data-rows></tbody></table><span role="status" data-total>0 registros · total 0</span></div>
