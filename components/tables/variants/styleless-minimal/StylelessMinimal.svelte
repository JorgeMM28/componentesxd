<script lang="ts">
import { mountStylelessMinimal } from './styleless-minimal.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountStylelessMinimal(node) }; }
</script>
<div class="cxd-table cxd-table--minimal" data-cxd-control="styleless-minimal" use:control><table><thead><tr><th>Miembro</th><th>Departamento</th><th>Estado</th></tr></thead><tbody><tr><td>Elena</td><td>Arquitectura</td><td>Online</td></tr><tr><td>Marco</td><td>Sistemas</td><td>Revisión</td></tr><tr><td>Sofía</td><td>Diseño</td><td>Online</td></tr></tbody></table></div>
