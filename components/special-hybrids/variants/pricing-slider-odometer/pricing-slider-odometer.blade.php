{{-- Incluye styles.css y ajusta la ruta del módulo. --}}
<section class="cxd-special cxd-special--board" data-cxd-control="pricing-slider-odometer"><header><small>ESTIMADOR DE TRÁFICO</small><h3>Estimador de tráfico</h3></header><p data-copy>Estimación restaurada</p><div class="cxd-special__scene" data-scene data-shape="board"><div class="cxd-special__actions" data-items><button type="button" data-item="0" aria-pressed="true">Starter</button><button type="button" data-item="1" aria-pressed="false">Pro</button><button type="button" data-item="2" aria-pressed="false">Enterprise</button></div><strong data-output>Starter</strong></div><div class="cxd-special__actions"><button type="button" data-primary>Recalcular</button><button type="button" data-reset>Restaurar</button></div><span role="status">Estimación restaurada</span></section>
<script type="module">
import { mountPricingSliderOdometer } from '/assets/pricing-slider-odometer.js';
document.querySelectorAll('[data-cxd-control="pricing-slider-odometer"]:not([data-ready])').forEach(root => { root.dataset.ready = 'true'; mountPricingSliderOdometer(root); });
</script>
