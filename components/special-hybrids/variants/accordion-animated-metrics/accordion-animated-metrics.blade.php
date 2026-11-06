{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--config" data-cxd-control="accordion-animated-metrics"><header><small>MÉTRICAS DE SERVICIO</small><h3>Métricas de servicio</h3></header><p data-copy>Métricas contraídas</p><div class="cxd-special__scene" data-scene data-shape="config"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Salud</button><button type="button" data-item="1" aria-pressed="false">Caché</button><button type="button" data-item="2" aria-pressed="false">Seguridad</button></div><strong data-output>Salud</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Expandir métrica</button><button type="button" data-reset>Restaurar</button></div><span role="status">Métricas contraídas</span></section>
<script type="module">
import { mountAccordionAnimatedMetrics } from '/assets/accordion-animated-metrics.js';
document.querySelectorAll('[data-cxd-control="accordion-animated-metrics"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountAccordionAnimatedMetrics(root); });
</script>
