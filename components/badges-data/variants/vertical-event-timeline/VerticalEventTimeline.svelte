<script lang="ts">
import { mountVerticalEventTimeline } from './vertical-event-timeline.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountVerticalEventTimeline(node) }; }
</script>
<div class="cxd-data" data-cxd-control="vertical-event-timeline" use:control><strong>Cronología de eventos</strong><button type="button" data-add>+ Agregar evento</button><div class="cxd-data__list" data-list aria-live="polite"><div class="cxd-data__item">Despliegue completado</div><div class="cxd-data__item">Archivos sincronizados</div></div></div>
