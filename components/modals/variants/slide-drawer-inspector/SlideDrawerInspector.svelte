<script lang="ts">
import { mountSlideDrawerInspector } from './slide-drawer-inspector.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSlideDrawerInspector(node) }; }
</script>
<div class="cxd-dialog cxd-dialog--drawer" data-cxd-control="slide-drawer-inspector" use:control><button type="button" data-open>Abrir inspector</button><span role="status">Inspector cerrado</span><dialog aria-label="Inspector lateral"><h3>Inspector de recurso</h3><div class="cxd-dialog__actions"><button type="button" data-tab="details" aria-pressed="true">Propiedades</button><button type="button" data-tab="json" aria-pressed="false">JSON</button></div><p data-panel="details">Región: us-east-1 · Estado: activo</p><pre data-panel="json" hidden>&#123; "region": "us-east-1", "activo": true &#125;</pre><button type="button" data-close>Cerrar</button></dialog></div>
