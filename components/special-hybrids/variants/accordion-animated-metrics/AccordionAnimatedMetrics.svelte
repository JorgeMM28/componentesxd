<script lang="ts">
import { mountAccordionAnimatedMetrics } from './accordion-animated-metrics.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountAccordionAnimatedMetrics(node) }; }
</script>
<div class="cxd-special" data-cxd-control="accordion-animated-metrics" use:control><h3>Métricas de servicio</h3><div class="cxd-special__scene" data-scene><small data-phase>LISTO</small><strong data-value>0 / 3</strong><p data-copy>Demostración autónoma: ejecuta la acción para actualizar el escenario.</p><div class="cxd-special__progress"><span data-progress></span></div></div><div class="cxd-special__actions"><button type="button" data-run>Expandir métrica</button><button type="button" data-reset>Reiniciar</button></div><span role="status">Métricas contraídas</span></div>
