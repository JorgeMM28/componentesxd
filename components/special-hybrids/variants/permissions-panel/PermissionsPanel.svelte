<script lang="ts">
import { mountPermissionsPanel } from './permissions-panel.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountPermissionsPanel(node) }; }
</script>
<section class="cxd-special cxd-special--stages" data-cxd-control="permissions-panel" use:control><header><small>PANEL DE PERMISOS</small><h3>Panel de permisos</h3></header><p data-copy>Permisos restaurados</p><div class="cxd-special__scene" data-scene data-shape="stages"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Editar</button><button type="button" data-item="1" aria-pressed="false">Publicar</button><button type="button" data-item="2" aria-pressed="false">Administrar</button></div><strong data-output>Editar</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Aplicar permiso</button><button type="button" data-reset>Restaurar</button></div><span role="status">Permisos restaurados</span></section>
