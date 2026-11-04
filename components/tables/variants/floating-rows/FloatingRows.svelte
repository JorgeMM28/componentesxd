<script lang="ts">
import { mountFloatingRows } from './floating-rows.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountFloatingRows(node) }; }
</script>
<div class="cxd-table cxd-table--floating" data-cxd-control="floating-rows" use:control><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>
