<script lang="ts">
import { mountDynamicIslandMorph } from './dynamic-island-morph.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountDynamicIslandMorph(node) }; }
</script>
<div class="cxd-toast cxd-toast--island" data-cxd-control="dynamic-island-morph" use:control><strong data-title>MODO COMPACTO // IDLE</strong><button type="button" data-mode="compact">Compacto</button><button type="button" data-mode="expanded">Expandir detalles</button><p data-details hidden>Despliegue en curso hacia 12 regiones · 94% completado.</p><span role="status">Modo compacto</span></div>
