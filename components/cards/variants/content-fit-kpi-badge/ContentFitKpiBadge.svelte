<script lang="ts">
import { mountContentFitKpiBadge } from './content-fit-kpi-badge.js';
import './styles.css';
function control(node: HTMLElement) { return { destroy: mountContentFitKpiBadge(node) }; }
</script>
<div class="cxd-card cxd-card--fit" data-cxd-control="content-fit-kpi-badge" use:control><span>LATENCIA P99</span><h3>6.42 ms</h3><p>−1.8 ms hoy</p></div>
