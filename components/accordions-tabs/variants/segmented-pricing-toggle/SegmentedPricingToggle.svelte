<script lang="ts">
import { mountSegmentedPricingToggle } from './segmented-pricing-toggle.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountSegmentedPricingToggle(node) }; }
</script>
<div class="cxd-widget" data-cxd-control="segmented-pricing-toggle" use:control><div class="cxd-widget__row"><button type="button" data-period="monthly" aria-pressed="true">Mensual</button><button type="button" data-period="yearly" aria-pressed="false">Anual · 20% menos</button></div><strong data-price>$20 / mes</strong><span role="status">Facturación mensual</span></div>
