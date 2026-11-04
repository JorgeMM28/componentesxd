<script lang="ts">
import { mountActionToolbarCard } from './action-toolbar-card.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountActionToolbarCard(node) }; }
</script>
<div class="cxd-card" data-cxd-control="action-toolbar-card" use:control><span>REPOSITORIO // CORE-UI</span><h3>Paquete de componentes</h3><p>Una tarjeta con acciones independientes.</p><div class="cxd-card__actions"><button type="button" data-star aria-pressed="false">Estrella (<span data-count>142</span>)</button><button type="button" data-action="Enlace listo para compartir">Compartir</button><button type="button" data-action="Repositorio preparado">Clonar</button></div><span role="status">Listo</span></div>
