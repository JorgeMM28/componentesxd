<script lang="ts">
import { mountPermissionsPanel } from './permissions-panel.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountPermissionsPanel(node) }; }
</script>
<section class="cxd-special cxd-permissions" data-cxd-control="permissions-panel" use:control><header><small>ROL · EDITOR</small><h3>Permisos del equipo</h3></header><fieldset data-permissions><label><input type="checkbox" checked /> Editar proyectos</label><label><input type="checkbox" checked /> Publicar contenido</label><label><input type="checkbox" /> Gestionar equipo</label></fieldset><footer><strong data-count>2 permisos</strong><button type="button" data-save>Guardar cambios</button></footer><span role="status">Cambios sin guardar.</span></section>
